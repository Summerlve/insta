"use strict";
// recovery.js will erase current data , this cmd just for migration

const path = require("path");
const AdmZip = require("adm-zip");
const Sequelize = require("sequelize");
const config = require("../config.json");
const fs = require("fs");
const fse = require("fs-extra");
const crypto = require("crypto");
const [ , , secretKey] = process.argv;

if (!secretKey)
{
    return console.error("Need Secret Key");
}

// remember that: decryption first, then decopress it
const backUpPath = path.join(__dirname, "..", "backup");
const cipherFilePath = path.join(backUpPath, "insta_backup.zip.enc");
const decipher = crypto.createDecipher("aes-256-cfb", secretKey);
const zipFilePath = path.join(backUpPath, "insta_backup.zip");
const cipherFileReadStream = fs.createReadStream(cipherFilePath);
const decipherFileWriteStream = fs.createWriteStream(zipFilePath);

cipherFileReadStream.pipe(decipher).pipe(decipherFileWriteStream);

decipherFileWriteStream.on("finish", _ => {
    // upzip the insta_file.zip in backup folder
    const zipFile = new AdmZip(zipFilePath);
    zipFile.extractAllTo(backUpPath, true);

    // recovery the db
    const { type, username, password, database, host, port } = config.db;
    const { timezone } = config.app;
    const recoveryDBPath = path.join(__dirname, "..", "backup", "db.txt");

    const sequelize = new Sequelize(database, username, password, {
        host: host,
        dialect: type,
        port: port,
        define: {
            freezeTableName: true,
            timestamps: false
        },
        timezone,
        logging: false
    });

    const Post = require("../app/models/post.js")(sequelize, Sequelize);

    sequelize.sync().then(_ => {
        return sequelize.query(
            `load data infile "${recoveryDBPath}" into table post
            fields terminated by "\t" lines terminated by "\r\n"
            (@col1, @col2, @col3) set content=@col1,img=@col2,create_at=@col3`);
    }).then(_ => {
        // recovery the images
        const originImgPath = path.join(__dirname, "..", "public", "images");
        const recoveryImgPath = path.join(__dirname, "..", "backup", "images");

        // copy images
        fse.copySync(recoveryImgPath, originImgPath);

        // remove extract files
        fse.removeSync(recoveryDBPath);
        fse.removeSync(recoveryImgPath);
        fse.removeSync(zipFilePath);

        sequelize.close();

        console.log("Recovery completed");
    }).catch(error => {
        sequelize.close();
        console.error(error);
    });
});

