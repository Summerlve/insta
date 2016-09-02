"use strict";

const { Post, sequelize } = require("../../db.js");

module.exports.range = (req, res, next) => {
    let { pos, num } = req.query;

    if (pos === -1)
    {
        // init data
        return Post.findAll({
            order: [
                ["id", "DESC"]
            ],
            limit: num
        }).then(records => {
            res.json(records);
        }).catch(error => {
            next(error);
        });
    }

    Post.findAll({
        where: {
            id: {
                $lte: pos
            }
        },
        order: [
            ["id", "DESC"]
        ],
        limit: num
    }).then(records => {
        res.json(records);
    }).catch(error => {
        next(error);
    });
};

module.exports.add = (req, res, next) => {
    const { filename: img } = req.file;
    const { content } = req.body;

    console.log(req.file);
    if (!img || !content)
    {
        return res.render("badrequest.html", {}, (error, html) => {
            res.status(400).send(html);
        });
    }

    const post = { content, img };

    sequelize.transaction(transaction => {
        return Post.create(post, { transaction });
    }).then(post => {
        // transaction commited
        res.redirect("/page");
    }).catch(error => {
        next(error);
    });
};
