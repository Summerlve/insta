"use strict";

const User = require("../models/user.js");

module.exports.info = (req, res, next) => {
    const { userId } = req.session;

    User.findById(parseInt(userId, 10), {
        attributes: ["username", "github", "twitter"]
    }).then(user => {
        res.json(user);
    }).catch(error => {
        next(error);
    });
};

module.exports.update = (req, res, next) => {
    const { userId } = req.session;

    const { username, password, github, twitter } = req.body;

    let changes = {
        username,
        password,
        github,
        twitter
    };

    // remove fileds which does not need to be modified
    for (let key in changes)
    {
        if (changes[key] === undefined) delete changes[key];
    }

    User.findById(parseInt(userId, 10)).then(user => {
        return user.update(changes);
    }).then(_ => {
        res.json();
    }).catch(error => {
        res.json();
    });
};
