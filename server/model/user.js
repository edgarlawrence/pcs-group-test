const db = require("../config/config");
const Sequelize = require("sequelize");
const Cart = require("./cart");

const Datatypes = Sequelize;

const User = db.define(
  "User",
  {
    fullName: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    address: {
      type: Datatypes.TEXT,
      allowNull: false,
    },
    phoneNumber: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

db.sync();

module.exports = User;
