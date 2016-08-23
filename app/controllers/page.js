"use strict";

module.exports.index = (req, res, next) => {
    res.render("page.html", { title: "page", username: "Summer" }, (error, html) => {
        res.send(html);
    });
};
