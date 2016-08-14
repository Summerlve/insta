"use strict";

const Post = require("../models/post.js");
const sequelize = require("../../db.js");

module.exports.range = (req, res, next) => {
    let { pos, num = 1 } = req.query;

    // string->number
    pos = parseInt(pos, 10);
    num = parseInt(num, 10);

    Post.findAll({
        where: {
            id: {
                $lte: pos
            }
        },
        order: [
            ["create_at", "DESC"]
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
