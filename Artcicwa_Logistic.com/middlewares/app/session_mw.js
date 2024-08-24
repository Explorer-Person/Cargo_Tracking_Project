const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const deliveryPool = require("../../db/myDB");

const express = require("express");
const session_mw = express.Router();

const optionsUser = {
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  createDatabaseTable: true,
  expiration: 30 * 60 * 1000,
  schema: {
    tableName: 'customer_sessions', 
  }
};

const sessionDBCustomer = new MySQLStore(optionsUser);

session_mw.use(
  session({
    name: "track",
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      httpOnly: true,
    },
    store: sessionDBCustomer,
  })
);

module.exports = session_mw;