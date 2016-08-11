"use strict";

const express = require("express");
const router = express.Router();
const page = require("./app/controllers/page.js");
const root = require("./app/controllers/root.js");
const user = require("./app/controllers/user.js");
const filter = require("./app/controllers/filter.js");
const auth = require("./app/controllers/auth.js");
const post = require("./app/controllers/post.js");

// page
router.get("/", page.index);
router.get("/page", page.index);
router.get("/index", page.index);

// post
router.get("/post", post.range);
router.post("/post", post.add);

// login
router.get("/login", auth.index);
router.post("/login", auth.login);
router.get("/logout", filter, auth.logout);

// root
router.get("/root", root);

// setting user info
router.get("/setting", filter, user.info);
router.post("/setting", filter, user.update);

module.exports = router;
