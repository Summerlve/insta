"use strict";

const Post = require("../models/post.js");

module.exports.range = (req, res) => {
    let { pos, num = 1 } = req.query;

    // string->number
    pos = parseInt(pos, 10);
    num = parseInt(num, 10);

    Post.findAll({
        where: {
            id: {
                $lt: pos
            }
        },
        order: [
            ["create_at", "DESC"]
        ],
        limit: num
    }).then(records => {
        res.json(records);
    });
};

module.exports.add = (req, res) => {
    
};
