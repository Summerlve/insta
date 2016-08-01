"use strict";

const express = require("express");
const router = express.Router();
const page = require("./page.js");
const auth = require("./auth.js");
const setting = require("./setting.js");
const upload = require("./upload.js");

router.get("/", page.index);
router.get("/page", page.index);
router.get("/page/:id", page.one);
router.post("/auth", auth.login);
router.delete("/auth", auth.logout);
router.get("/settting", setting.index);
router.post("/setting", setting.set);
router.post("/upload", upload);

module.exports = router;
