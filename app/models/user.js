"use strict";

module.exports = function(sequelize, Sequelize) {
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

    return User;
};

