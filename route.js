"use strict";

const express = require("express");
const router = express.Router();
const page = require("./app/controllers/page.js");
const root = require("./app/controllers/root.js");
const setting = require("./app/controllers/setting.js");
const filter = require("./app/controllers/filter.js");
const auth = require("./app/controllers/auth.js");

// page
router.get("/", page.index);
router.get("/page", page.index);
router.get("/index", page.index);

// login
router.get("/login", auth.index);
router.post("/login", auth.login);
router.get("/logout", filter, auth.logout);

// root
router.get("/root", root);
router.get("/root/setting", filter, setting.info);
router.post("/root/setting", filter, setting.update);

module.exports = router;
