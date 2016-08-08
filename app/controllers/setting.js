"use strict";

const User = require("../models/user.js");

module.exports.info = (req, res, next) => {
    const { userId } = req.session;

    User.findById(parseInt(userId, 10), {
        attributes: ["username", "id", "avatar", "github", "twitter"]
    }).then(user => {
        res.json(user);
    }, error => {
        next(error);
    })
};

module.exports.update = (req, res, next) => {
    const { userId } = req.session;

    const { username, password, avatar, github, twitter} = req.body;

    [username, password, avatar, github, twitter].filter(_ => _ !== "");
};
