"use strict";

const { Tweet } = require("../../db.js");

module.exports.add = (req, res, next) => {
    const { content } = req.body;
    if (!content)
    {
        return res.render("badRequest.html", {}, (error, html) => {
            res.status(400).send(html);
        };
    }
};

module.exports.update = (req, res, next) => {

};
