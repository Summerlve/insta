"use strict";

const Sequelize = require("sequelize");
const moment = require("moment");
const { sequelize, config: { app: { timezone } } } = require("../../index.js");

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
		unique: true,
		field: "img"
	},
	createAt: {
		type: Sequelize.DATE,
		allowNull: false,
		field: "create_at",
		defaultValue() {
			return moment.utc().format("YYYY-MM-DDTHH:mm:ss");
		},
		get() {
			let createAt = this.getDataValue("createAt");

			// The Sequelize fucking logic, i do not understood
			if (createAt instanceof Date) return createAt;

			createAt = createAt.replace(" ", "T");
			return moment(new Date(createAt).toISOString())
					.utcOffset(timezone)
					.format("YYYY-MM-DDTHH:mm:ss");
		}
	}
});

sequelize.sync();

module.exports = Post;
