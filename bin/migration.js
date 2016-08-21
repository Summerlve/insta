"use strict";

// migrate the db
const mysql = require("mysql");
const { username: user, host, password, database } = require("../config.json").db;
const path = require("path");

const connection = mysql.createConnection({
    host,
    user,
    password,
    database
});

connection.connect();

connection.query("select * from post", function(err, rows, fields) {
if (err) throw err;

console.log("The solution is: ", rows[0]);

});

connection.end();

// migrate the images by cmd 'cp'
const imgPath = path.join(__dirname, "..", "public", "images");
console.log(imgPath);

// compress the files


