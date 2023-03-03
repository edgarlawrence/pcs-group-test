const sequelize = require("sequelize");

const db = new sequelize("pcs_test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
