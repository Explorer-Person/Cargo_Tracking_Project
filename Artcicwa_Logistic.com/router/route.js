const delivery = require("../controllers/deliveryController");
const validator = require("../validator/validator");


const express = require("express");
const auth_mw = require("../middlewares/app/auth_mw");
const route = express.Router();

route.post(
  "/login",
  validator,
  delivery.validate,
  auth_mw,
  delivery.getDelivery
);
route.post("/logout", auth_mw, delivery.logout);



module.exports = route;
