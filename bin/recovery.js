"use strict";
// recovery.js will erase current data , this cmd just for migration

// upzip the insta_file.zip in backup folder
const path = require("path");
const backUpPath = path.join(__dirname, "..", "backup");
const zipFilePath = path.join(backUpPath, "insta_backup.zip");
const AdmZip = require("adm-zip");

const zip = new AdmZip(zipFilePath);
zip.extractAllTo(backUpPath, true);

// recovery the db
const Sequelize = require("sequelize");
const config = require("../config.json");
const { type, username, password, database, host, port } = config.db;
const { timezone } = config.app;
const outDBPath = path.join(__dirname, "..", "backup", "db.txt");

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
        `load data infile "${outDBPath}" into table post
        fields terminated by "\t" lines terminated by "\r\n"
        (@col1, @col2, @col3) set content=@col1,img=@col2,create_at=@col3`);
}).then(_ => {
    // recovery the images
    const fse = require("fs-extra");
    const originImgPath = path.join(__dirname, "..", "public", "images");
    const recoveryImgPath = path.join(__dirname, "..", "backup", "images");

    // copy images
    fse.copySync(recoveryImgPath, originImgPath);

    // remove extract files
    fse.removeSync(outDBPath);
    fse.removeSync(recoveryImgPath);

    sequelize.close();

    console.log("Recovery completed");
}).catch(error => {
    sequelize.close();
    throw error;
});

