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
router.get("/root/login", auth.index);
router.post("/root/login", auth.login);
router.post("/root/logout", auth.logout);

// root
router.get("/root", filter, root);
router.put("/root/setting", filter, setting.update);

module.exports = router;
