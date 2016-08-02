"use strict";

const User = require("../models/user.js");

module.exports.index = (req, res) => {
    res.render("login.html", { title: "login" }, function(err, html) {
        res.send(html);
    });
};

module.exports.login = (req, res) => {

};

module.exports.logout = (req, res) => {

};
