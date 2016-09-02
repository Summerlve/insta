"use strict";

const { storeImgPath } = require("./index.js");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const uuid = require("node-uuid");
const path = require("path");
const page = require("./app/controllers/page.js");
const root = require("./app/controllers/root.js");
const setting = require("./app/controllers/setting.js");
const filter = require("./app/controllers/filter.js");
const auth = require("./app/controllers/auth.js");
const post = require("./app/controllers/post.js");
const stringToNumber = require("./app/controllers/stringToNumber.js");
const ImageStorageEngine = require("./lib/ImageStorageEngine.js");

// router init
const router = express.Router();

// file upload init
const storage = new ImageStorageEngine({
    destination(req, file, cb) {
        cb(null, storeImgPath);
    },
    filename(req, file, cb) {
        const extname = path.extname(file.originalname);
        cb(null, `${uuid.v4()}${extname}`);
    }
});

// page
router.get("/", page.index);
router.get("/page", page.index);
router.get("/index", page.index);

// post
router.get("/post", stringToNumber(["pos", "num"]), post.range);
router.post("/post", filter, multer({ storage }).single("image"), post.add);

// login
router.get("/login", auth.index);
router.post("/login", bodyParser.urlencoded({ extended: false }), auth.login);
router.get("/logout", filter, auth.logout);

// root
router.get("/root", filter, root);

// setting user info
router.get("/setting", setting.info);
router.post("/setting", filter, bodyParser.urlencoded({ extended: false }), setting.update);

module.exports = router;
