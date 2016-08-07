"use strict";

const User = require("../models/user.js");

module.exports.index = (req, res, next) => {
    const { access } = req.session;

    if (access === true) return res.redirect("/root"); // if is login, redirect to /root

    return res.render("login.html", { title: "login" },  (error, html) => {
        if (error) next(error);
        res.send(html);
    });
};

module.exports.login = (req, res, next) => {
    const { username, password } = req.body;

    User.findOne({
        where: { username, password },
        attributes: ["username"]
    }).then(user => {
        if (!user)
        {
            return module.exports.index(req, res, next);
        }

        req.session.access = true;
        res.redirect("/root");
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

    res.redirect("/login");
};
