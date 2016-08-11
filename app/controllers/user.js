"use strict";

const User = require("../models/user.js");

module.exports.info = (req, res, next) => {
    const { userId } = req.session;

    User.findById(parseInt(userId, 10), {
        attributes: ["username", "id", "github", "twitter"]
    }).then(user => {
        res.json(user);
    }, error => {
        next(error);
    })
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

    for (let key in changes)
    {
        if (changes[key] === undefined) delete changes[key];
    }

    User.findById(parseInt(userId, 10)).then(user => {
        return user.update(changes);
    }.then(_ => {
        res.json();
    }).error(error => {
        res.json();
    });

};
