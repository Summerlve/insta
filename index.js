"use strict";

const path = require("path");
const express = require("express");
const app = express();

const [ , , env] = process.argv;

// set NODE_ENV
(!env)?
    process.env.NODE_ENV = "development" : process.env.NODE_ENV = env;

// app root dir
const appRoot = __dirname
module.exports.appRoot = appRoot;

// app config
const config = require("./config.json");
module.exports.config = config;

// db init
module.exports.sequelize = require("./db.js");

// static files
app.use("/static",
    express.static(
        path.join(appRoot, "public")));

// use ejs engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

// set view root dir
app.set("views", path.join(appRoot, "app", "views"));

// body-parser
const bodyParser = require("body-parser");
console.log(bodyParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// load route
const router = require("./route.js");
app.use("/", router);

// listen port, default port is 9000 just for test
const { app: { production: { host, port } } } = config;
app.listen(port, host);
