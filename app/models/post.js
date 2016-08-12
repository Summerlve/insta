"use strict";

const Sequelize = require("sequelize");
const moment = require("moment");
const { sequelize, config: tz } = require("../../index.js");

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
		defaultValue() {
			return moment.utc().format("YYYY-MM-DDTHH:mm:ss");
		},
		get() {
			let createAt = this.getDataValue("createAt");

			createAt = createAt.replace(" ", "T");

			return moment(new Date(createAt).toISOString())
					.utcOffset(tz)
					.format("YYYY-MM-DD HH:mm:ss");
		}
	}
});

sequelize.sync();

module.exports = Post;
