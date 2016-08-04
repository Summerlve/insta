"use strict";

module.exports = (req, res) => {
    res.render("root.html", {}, function(err, html) {
        res.send(html);
    });
};
