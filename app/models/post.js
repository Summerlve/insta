"use strict";

const Sequelize = require("sequelize");
const { sequelize } = require("../../index.js");

const Post = sequelize.define("post", {
	id: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		unique: true,
		primaryKey: true,
		autoIncrement: true,
		field: "id"
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false,
		field: "content"
	},
	img: {
		type: Sequelize.STRING(255),
		allowNull: false,
		unique: false,
		field: "img"
	},
	createAt: {
		type: Sequelize.DATE,
		field: "create_at",
	}
});

sequelize.sync();

module.exports = Post;
