const cors = require("cors");

const express = require("express");
const cors_mw = express.Router();

cors_mw.use(
  cors({
    origin: process.env.CLIENT,
    methods: ["POST", "GET"],
    credentials: true,
  })
);

module.exports = cors_mw;
