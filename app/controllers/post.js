"use strict";

const post = require("../models/post.js");

module.exports.range = (req, res) => {
    const { begin, num = 1 } = req.query;

    // string->number
    begin = parseInt(begin, 10);
    num = parseInt(num, 10);

};

module.exports.change = (req, res) => {

};

module.exports.delete = (req, res) => {

};

module.exports.add = (req, res) => {

};
