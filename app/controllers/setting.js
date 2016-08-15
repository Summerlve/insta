"use strict";

const User = require("../models/user.js");
const sequelize = require("../../db.js");
const md5 = require("md5");
const Result = require("../models/result.js");

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

    console.log(req.body);

    const { username, password, password_again, github, twitter } = req.body;

    if ((password && password_again) && (password !== password_again))
    {
        return res.json(new Result(1, "two passwords are not the same"));
    }

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

    if (changes.password)
    {
        changes.password = md5(changes.password);
    }

    User.findById(parseInt(userId, 10)).then(user => {
        return sequelize.transaction(transaction => {
            return user.update(changes, { transaction });
        });
    }).then(userUpdated => {
        // transaction commited
        res.json(new Result(0, "operation succeeded"));
    }).catch(error => {
        next(error);
    });
};
