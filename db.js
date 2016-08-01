"use strict";

const { type, username, password, database, host, port, pool } = require("./index.js").config.db.production;
const Sequelize = require("sequelize");

// sequelize init
const sequelize = new Sequelize(database, username, password, {
	host: host,
	dialect: type,
	port: port,
	pool: pool,
	define: {
		freezeTableName: true,
		timestamps: false
	}
});

module.exports = sequelize;
