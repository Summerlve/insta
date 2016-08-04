"use strict";

const express = require("express");
const router = express.Router();
const page = require("./app/controllers/page.js");
const root = require("./app/controllers/root.js");

// page
router.get("/", page.index);
router.get("/page", page.index);
router.get("/index", page.index);

// root
router.get("/root", root);

module.exports = router;
