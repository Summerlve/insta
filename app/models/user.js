"use strict";

const Sequelize = require("sequelize");
const { sequelize } = require("../../index.js");
const md5 = require("md5");

const User = sequelize.define("user", {
	id: {
		type: Sequelize.INTEGER(255),
		allowNull: false,
		unique: true,
		primaryKey: true,
		autoIncrement: true,
		field: "id"
	},
	username: {
		type: Sequelize.STRING(255),
		allowNull: false,
		unique: true,
		field: "username"
	},
	password: {
		type: Sequelize.STRING(255),
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

// init data
User.findOne({}).then(user => {
	if (!user)
	{
		return sequelize.transaction(transaction => {
	        return User.create({
				username: "root",
				password: md5("123456")
			}, { transaction });
	    }).then(user => {
			console.log("init user");
	    });
	}
}).catch(error => {
	console.error(error);
});

module.exports = User;
