"use strict";

module.exports = (req, res) => {
    res.render("root.html", {}, (error, html) => {
        res.send(html);
    });
};
