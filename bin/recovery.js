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
const mysql = require("mysql");
const { username: user, host, password, database } = require("../config.json").db;
const outDBPath = path.join(__dirname, "..", "backup", "db.txt");

const connection = mysql.createConnection({
    host,
    user,
    password,
    database
});

connection.connect();

connection.query(
    `load data infile "/Users/Summer/Projects/insta/backup/db.txt" into table post
    fields terminated by "\t" lines terminated by "\r\n"
    (@col1, @col2, @col3) set content=@col1,img=@col2,create_at=@col3`
);

connection.end();

// recovery the images
const fse = require("fs-extra");
const originImgPath = path.join(__dirname, "..", "public", "images");
const recoveryImgPath = path.join(__dirname, "..", "backup", "images");

// copy images
try {
    fse.copySync(recoveryImgPath, originImgPath);
} catch (e) {
    console.error(e);
}

console.log("Recovery completed");
