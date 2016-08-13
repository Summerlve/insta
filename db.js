"use strict";

const Sequelize = require("sequelize");

const { config } = require("./index.js");

// get config
const { type, username, password, database, host, port, pool } = config.db;

// get timezone
const { timezone } = config.app;

// sequelize init
const sequelize = new Sequelize(database, username, password, {
	host: host,
	dialect: type,
	port: port,
	pool: pool,
	define: {
		freezeTableName: true,
		timestamps: false
	},
	timezone
});

module.exports = sequelize;
