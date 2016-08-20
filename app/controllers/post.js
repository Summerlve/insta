"use strict";

const Post = require("../models/post.js");
const sequelize = require("../../db.js");

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

    if (!img || !content)
    {
        return res.redirect("/root");
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
