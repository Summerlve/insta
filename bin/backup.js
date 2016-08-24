"use strict";
//backup.js will backup all posts in db, and all images, but not include account infomations

const path = require("path");

// delete some files in  backup folder
const fse = require("fs-extra");
const backUpPath = path.join(__dirname, "..", "backup");

fse.removeSync(path.join(backUpPath, "db.txt"));
fse.removeSync(path.join(backUpPath, "images"));
fse.removeSync(path.join(backUpPath, "insta_backup.zip"));

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
    function(error, rows, fields) {

        if (error) throw error;

        // migrate the images
        const fs = require("fs");
        const originImgPath = path.join(__dirname, "..", "public", "images");
        const outImgPath = path.join(__dirname, "..", "backup", "images");

        // mkdir
        fs.mkdirSync(outImgPath);

        // copy images
        fse.copySync(originImgPath, outImgPath);

        // compress the files
        const archiver = require('archiver');
        const zipFilePath = path.join(__dirname, "..", "backup", "insta_backup.zip");
        const zipFileStream = fs.createWriteStream(zipFilePath);
        const archive = archiver("zip");

        // remove temp files when zip failed, db.txt and images folder
        archive.on("error", error => {
            fse.removeSync(outImgPath);
            fse.removeSync(outDBPath);

            // close the sql connection
            connection.end();
            throw error;
        });

        // remove temp files when zip finish, db.txt and images folder
        archive.on("end", _ => {
            fse.removeSync(outImgPath);
            fse.removeSync(outDBPath);

            // close the sql connection
            connection.end();

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
