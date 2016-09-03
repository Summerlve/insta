"use strict";

const path = require("path");
const moment = require("moment");
const { app: { timezone } } = require("../../config.json");

module.exports = function(sequelize, Sequelize) {
    const Post = sequelize.define("post", {
        id: {
            type: Sequelize.INTEGER(255),
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
            type: Sequelize.STRING.BINARY,
            allowNull: false,
            unique: true,
            field: "img",
            get() {
                return  `/static/images/${this.getDataValue("img")}`;
            }
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

                // I do not understand the Sequelize fucking logic,
                if (createAt instanceof Date) return createAt;

                createAt = createAt.replace(" ", "T");
                return moment(new Date(createAt).toISOString())
                        .utcOffset(timezone)
                        .format("YYYY-MM-DDTHH:mm:ss");
            }
        }
    });

    return Post;
};
