"use strict";
//backup.js will backup all posts in db, and all images, but not include account infomations

const path = require("path");

// empty the backup folder
const fse = require("fs-extra");
const backUpPath = path.join(__dirname, "..", "backup");

try {
    fse.emptyDirSync(backUpPath);
} catch (error) {
    console.error(error);
}

// migrate the db
const mysql = require("mysql");
const { username: user, host, password, database } = require("../config.json").db;

const connection = mysql.createConnection({
    host,
    user,
    password,
    database
});

connection.connect();

const outDBPath = path.join(__dirname, "..", "backup", "db.txt");
connection.query(
    `select content, img, create_at from post order by create_at
    into outfile "${outDBPath}"
    fields terminated by "\t" lines terminated by "\r\n"`,
    function(err, rows, fields) {
        if (err) throw err;

        // migrate the images
        const fs = require("fs");
        const originImgPath = path.join(__dirname, "..", "public", "images");
        const outImgPath = path.join(__dirname, "..", "backup", "images");

        // mkdir
        try {
            fs.mkdirSync(outImgPath);
        } catch (e) {
            console.error(e);
        }

        // copy images
        try {
            fse.copySync(originImgPath, outImgPath);
        } catch (e) {
            console.error(e);
        }

        // compress the files
        const archiver = require('archiver');
        const zipFilePath = path.join(__dirname, "..", "backup", "insta_backup.zip");
        const zipFileStream = fs.createWriteStream(zipFilePath);
        const archive = archiver("zip");

        archive.on("error", error => {
            throw error;
        });

        // remove temp files when zip finish, db.txt and images folder
        archive.on("end", _ => {
            fse.removeSync(outImgPath);
            fse.removeSync(outDBPath);
            console.log("Backup completed");
        });

        archive.pipe(zipFileStream);
        archive
            .bulk([
                { src: outImgPath + "/*", dest: "/images", expand: true, flatten: outImgPath},
            ])
            .file(outDBPath, { name: "db.txt" });

        archive.finalize();
    }
);

connection.end();

