"use strict";

const path = require("path");
const express = require("express");
const app = express();
const helmet = require("helmet");

// use helmet
app.use(helmet());

// set NODE_ENV to "production"
app.set("env", "production");

// app root dir
const appRoot = __dirname
module.exports.appRoot = appRoot;

// app config
const config = require("./config.json");

// image store path
module.exports.storeImgPath = path.join(__dirname, "public", "images");

// db init
require("./db.js");

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

// session
const session = require("express-session");
app.use(session({
    secret: "insta",
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: true
}));

// favicon
const favicon = require("serve-favicon");
app.use(favicon(path.join(__dirname, "public", "favicon.ico" )));

// load route
const router = require("./route.js");
app.use("/", router);

// load error handle
const errorHandle = require("./app/controllers/error.js");
app.use(errorHandle);

// 404 handler
app.use((req, res, next) =>{
    res.render("notFound.html", {}, (error, html) => {
        res.status(404).send(html);
    });
});

// listen port, default port is 9000 just for test
const { app: { host, port } } = config;
app.listen(port, host, (error) => {
    if (error)
    {
        return console.error(error);
    }
    console.log(`listening ${host} : ${port}`);
});
