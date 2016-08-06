"use strict";

const Sequelize = require("sequelize");

let config = {};
const env = process.env.NODE_ENV;

if (env === "production")
{
	config = require("./index.js").config.db.production;
}
else if (env === "development" || !env)
{
	config = require("./index.js").config.db.development;
}

// get config
const { type, username, password, database, host, port, pool } = config;

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
