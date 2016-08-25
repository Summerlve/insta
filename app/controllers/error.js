"use strict";

module.exports = (error, req, res, next) => {
    console.error(error);
    res.render("internalServerError.html", {}, (error, html) => {
        res.status(500).send(html);
    });
};
