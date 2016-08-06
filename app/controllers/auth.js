"use strict";

const User = require("../models/user.js");

module.exports.index = (req, res, next) => {
    res.render("");
};

module.exports.login = (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({
        where: { username, password },
        attributes: ["username"]
    }).then(user => {
        if (!user)
        {
            return res.render("login.html", { title: "login" },  (error, html) => {
                res.send(html);
            });
        }

        req.session.access = true;
        res.end();
    });

};

module.exports.logout = (req, res, next) => {
    const {session: {access}} = req;
    if (access === true)
    {
        req.session.access = false;
    }
    else
    {
        // not access before, my be a fake request
    }
};
