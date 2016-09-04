"use strict";
// backup.js will backup all posts in db, and all images, but not include account infomations

const path = require("path");
const fse = require("fs-extra");
const mysql = require("mysql");
const fs = require("fs");
const archiver = require('archiver');
const archive = archiver("zip");
const crypto = require("crypto");
const uuid = require("node-uuid");

// remember that: compress first, then encryption
const backUpPath = path.join(__dirname, "..", "backup");

// delete some files in  backup folder
fse.removeSync(path.join(backUpPath, "db.txt"));
fse.removeSync(path.join(backUpPath, "account.txt"));
fse.removeSync(path.join(backUpPath, "images"));
fse.removeSync(path.join(backUpPath, "insta_backup.zip.enc"));

// migrate the db
const { username: user, host, password, database } = require("../config.json").db;

const connection = mysql.createConnection({
    host,
    user,
    password,
    database
});

connection.connect();

const outDBPath = path.join(__dirname, "..", "backup", "db.txt");
const outAccountPath = path.join(__dirname, "..", "backup", "account.txt");

connection.query(
    `select content, img, create_at from post order by create_at
    into outfile "${outDBPath}"
    fields terminated by "\t" lines terminated by "\r\n"`,
    function(error, rows, fields) {

        if (error) throw error;

        // migrate the images
        const originImgPath = path.join(__dirname, "..", "public", "images");
        const outImgPath = path.join(__dirname, "..", "backup", "images");

        // mkdir
        fs.mkdirSync(outImgPath);

        // copy images
        fse.copySync(originImgPath, outImgPath);

        // backup account infomations
        connection.query(
            `select username, password, github, twitter from user limit 1
            into outfile "${outAccountPath}"
            fields terminated by "\t" lines terminated by "\r\n"`,
            function(error, rows, fields) {
                // compress the files
                const zipFilePath = path.join(__dirname, "..", "backup", "insta_backup.zip.enc");
                const zipFileStream = fs.createWriteStream(zipFilePath);
                const secretKey = uuid.v4();
                const cipher = crypto.createCipher("aes-256-cfb", secretKey);

                // remove temp files when zip failed, db.txt and images folder
                archive.on("error", error => {
                    fse.removeSync(outImgPath);
                    fse.removeSync(outDBPath);
                    fse.removeSync(outAccountPath);

                    // close the sql connection
                    connection.end();
                    throw error;
                });

                // remove temp files when zip finish, db.txt and images folder
                archive.on("end", _ => {
                    fse.removeSync(outImgPath);
                    fse.removeSync(outDBPath);
                    fse.removeSync(outAccountPath);

                    // close the sql connection
                    connection.end();

                    console.log("Backup completed");
                    console.log(`Your secret key is ${secretKey}`);
                });

                archive.pipe(cipher).pipe(zipFileStream);
                archive
                    .bulk([
                        { src: outImgPath + "/*", dest: "/images", expand: true, flatten: outImgPath},
                    ])
                    .file(outDBPath, { name: "db.txt" })
                    .file(outAccountPath, { name: "account.txt" });

                archive.finalize();
            }
        );
    }
);
