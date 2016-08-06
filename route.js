"use strict";

const express = require("express");
const router = express.Router();
const page = require("./app/controllers/page.js");
const root = require("./app/controllers/root.js");
const setting = require("./app/controllers/setting.js");
const filter = require("./app/controllers/filter.js");

// page
router.get("/", page.index);
router.get("/page", page.index);
router.get("/index", page.index);

// root
router.get("/root", filter, root);
router.put("/setting", filter, setting.update);
router.get("/login", (req, res) => {
    res.render("login.html", { title: "page", username: "Summer" }, function(err, html) {
        console.log(err);
        res.send(html);
    });
});

module.exports = router;
