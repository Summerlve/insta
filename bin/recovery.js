"use strict";
// recovery.js will erase current data , this cmd just for migration

// upzip the insta_file.zip in backup folder
const path = require("path");
const fs = require("fs");
const unzip = require("unzip");
const backUpPath = path.join(__dirname, "..", "backup");
const zipFilePath = path.join(backUpPath, "insta_backup.zip";

fs.createReadStream(zipFilePath).pipe(unzip.Extract({ path: backUpPath }));

// recovery the db
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

// recovery the images

