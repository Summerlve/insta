"use strict";

module.exports = (req, res, next) => {
    const access = req.session.access;

    console.log(access);

    if (!access) return res.render("./login.html", {title: "Login"}, (error, html) => {
        console.log(error);
        res.send(html);
    });

    next();
};
