"use strict";

const express = require("express");
const router = express.Router();
const page = require("./app/controllers/page.js");
const auth = require("./app/controllers/auth.js");
const setting = require("./app/controllers/setting.js");
const editor = require("./app/controllers/editor.js");
const upload = require("./app/controllers/upload.js");
const file = require("./app/controllers/file.js");
const error = require("./app/controllers/error.js");

// page
router.get("/", page.index);
router.get("/page", page.index);
router.get("/page/:id", page.one);

// editor
router.get("/editor", editor);

// auth
router.get("/login", auth.index);
router.post("/login", auth.login);
router.post("/logout", auth.logout);

// setting
router.get("/settting", setting.index);
router.post("/setting", setting.set);

// upload
router.post("/upload", upload);

// file
router.get("/file", file.index);
router.get("/file/:id", file.one);
router.put("/file/:id", file.change);
router.delete("/file/:id", file.delete);

module.exports = router;
