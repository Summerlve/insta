"use strict";

const User = require("../../db.js").User;
const md5 = require("md5");

module.exports.index = (req, res, next) => {
    const { access } = req.session;

    if (access === true) return res.redirect("/root"); // if is login, redirect to /root

    return res.render("login.html", { title: "Login" },  (error, html) => {
        if (error) next(error);
        res.send(html);
    });

    next();
};

module.exports.login = (req, res, next) => {
    const { username, password } = req.body;

    User.findOne({
        where: { username, password: md5(password) },
        attributes: ["username", "id"]
    }).then(user => {
        if (!user)
        {
            return module.exports.index(req, res, next);
        }

        req.session.access = true;
        req.session.userId = user.id;

        res.redirect("/root");
    }).catch(error => {
        next(error);
    });
};

module.exports.logout = (req, res, next) => {
    req.session.destroy(); // destroy the session
    res.redirect("/login"); // redirect to /login
};
