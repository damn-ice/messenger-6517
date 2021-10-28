const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:ilovefood1896@localhost:5432/messenger", {
  logging: false
});

module.exports = db;
