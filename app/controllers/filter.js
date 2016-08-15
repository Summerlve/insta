"use strict";

const auth = require("./auth.js");
const Result = require("../models/result.js");

module.exports = (req, res, next) => {
    const access = req.session.access;

    if (!access)
    {
        switch (req.accepts(["html", "json"])) {
            case "html":
                return res.redirect("/login");
                break;
            case "json":
                return res.json(new Result(1, "needs login"));
            default:
                return res.redirect("/login");
        }
    }

    next();
};
