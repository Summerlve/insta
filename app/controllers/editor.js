"use strict";

module.exports = (req, res) => {
    res.render("editor.html", { title: "Editor", username: "Summer" }, function(err, html) {
        res.send(html);
    });
};
