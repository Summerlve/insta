"use strict";

const Sequelize = require("sequelize");
const config = require("./config.json");

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
	timezone,
    logging: false
});

const Post = require("./app/models/post.js")(sequelize, Sequelize);
const User = require("./app/models/user.js")(sequelize, Sequelize);

sequelize.sync().then(_ => {
	// init data
	User.findOne({}).then(user => {
		if (!user)
		{
			return sequelize.transaction(transaction => {
			    return User.create({
					username: "root",
					password: md5("123456")
				}, { transaction });
			});
		}
		else
		{
			return "inited";
		}
	}).then(result => {
	}).catch(error => {
	});
});

module.exports.Post = Post;
module.exports.User = User;
module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;
