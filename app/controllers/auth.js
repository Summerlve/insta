"use strict";

const User = require("../models/user.js");

module.exports.index = (req, res, next) => {
    res.render("login.html", { title: "login" }, function(err, html) {
        res.send(html);
    });
};

module.exports.login = (req, res, next) => {
    res.send(`username: ${req.body.username}, password: ${req.body.password}`);
};

module.exports.logout = (req, res, next) => {

};
