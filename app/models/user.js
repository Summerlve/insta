"use strict";

const Sequelize = require("sequelize");
const { sequelize } = require("../../index.js");

const User = sequelize.define("user", {
	id: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		unique: true,
		primaryKey: true,
		autoIncrement: true,
		field: "id"
	},
	username: {
		type: Sequelize.STRING(40),
		allowNull: false,
		unique: true,
		field: "username"
	},
	password: {
		type: Sequelize.STRING(40),
		allowNull: false,
		unique: false,
		field: "password"
	},
	github: {
		type: Sequelize.STRING(255),
		allowNull: true,
		unique: true,
		field: "github"
	},
	twitter: {
		type: Sequelize.STRING(255),
		allowNull: true,
		unique: true,
		field: "twitter"
	}
});

sequelize.sync();

module.exports = User;
