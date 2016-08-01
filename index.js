"use strict";
const path = require("path");
const express = require("express");
const app = express();
const router = require("./app/route.js");

// app root dir
global.appRoot = __dirname;

// static files
app.use("/static", express.static(path.join(appRoot, "public")));

// load route
app.use("/", router);

app.listen("9000");
