"use strict";

const auth = require("./auth.js");

module.exports = (req, res, next) => {
    const access = req.session.access;

    if (!access) return res.redirect("/login");

    next();
};
