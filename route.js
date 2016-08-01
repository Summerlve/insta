"use strict";

const express = require("express");
const router = express.Router();
const page = require("./app/controllers/page.js");
const auth = require("./app/controllers/auth.js");
const setting = require("./app/controllers/setting.js");
const upload = require("./app/controllers/upload.js");
const file = require("./app/controllers/file.js");
const error = require("./app/controllers/error.js");

router.get("/", page.index);
router.get("/page", page.index);
router.get("/page/:id", page.one);
router.get("/auth", auth.index);
router.post("/auth", auth.login);
router.delete("/auth", auth.logout);
router.get("/settting", setting.index);
router.post("/setting", setting.set);
router.get("/upload", upload.index);
router.post("/upload", upload.post);
router.get("/file", file.index);
router.get("/file/:id", file.one);
router.put("/file/:id", file.change);
router.delete("/file/:id", file.delete);

module.exports = router;
