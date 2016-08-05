"use strict";

const { viewRoot } = require("../../index.js");
const path = require("path");
const Post = require("../models/post.js");

module.exports.index = (req, res) => {
    res.render("page.html", { title: "page", username: "Summer" }, function(err, html) {
        res.send(html);
    });
};
