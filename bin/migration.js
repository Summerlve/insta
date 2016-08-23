"use strict";

const path = require("path");

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
    `select content, img, create_at  from post
    into outfile "${outDBPath}"
    fields terminated by "\t" lines terminated by "\r\n"`,
    function(err, rows, fields) {
        if (err) throw err;
    }
);

connection.end();

// migrate the images
const fs = require("fs");
const fse = require("fs-extra");
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
    console.log("Migration completed");
});

archive.pipe(zipFileStream);
archive
    .bulk([
        { src: outImgPath + "/*", dest: "/images", expand: true, flatten: outImgPath},
    ])
    .file(outDBPath, { name: "db.txt" });

archive.finalize();
