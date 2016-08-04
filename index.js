"use strict";

const path = require("path");
const express = require("express");
const app = express();

const [ , , env] = process.argv;

// set NODE_ENV
(!env)?
    process.env.NODE_ENV = "development" : process.env.NODE_ENV = env;

if (app.get("env") === "production")
{
    // do somthing in production env
    // smothing secrity
}

// app root dir
const appRoot = __dirname
module.exports.appRoot = appRoot;

// app config
const config = require("./config.json");
module.exports.config = config;

// db init
module.exports.sequelize = require("./db.js");

// gzip
const compression = require("compression");
app.use(compression({ threshold: 0 }));

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// session
const session = require("express-session");
app.use(session({
    secret: "insta",
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: true
}));

// load route
const router = require("./route.js");
app.use("/", router);

// listen port, default port is 9000 just for test
const { app: { production: { host, port } } } = config;
app.listen(port, host);
