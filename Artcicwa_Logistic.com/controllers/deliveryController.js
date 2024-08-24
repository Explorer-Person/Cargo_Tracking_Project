const Queries = require("../db/queries");
const sendError = require("../errors/sendError");
const {
  save_session_mw,
  destroy_session_mw,
} = require("../middlewares/controller/process_session_mw");
const transformDeliveryData = require("./transformData");
const { validationResult } = require("express-validator");

exports.validate = async (req, res, next) => {
  const tracking_code = req.body.tracking_code
    ? req.body.tracking_code
    : req.session.tracking_code;
  
    if(!tracking_code){
      return res.status(403).json({
        status: "fail",
        msg: "Please enter a valid tracking code...",
      });
    }

  const validationErrors = validationResult(req);
  if (validationErrors.array().length > 0) {
    return res.status(403).json({
      status: "fail",
      msg: "Please enter a valid tracking code...",
    });
  }

  Queries.getDelivery(tracking_code)
    .then(async (delivery) => {
      if (!delivery || delivery === null) {
        return sendError("Delivery Not Found", "fail", 404, next);
      }
      return save_session_mw(req, res, next, tracking_code, delivery);
    })
    .catch((err) => {
      return sendError(
        "The site has an issue, dont worry, we working on it.",
        "fail",
        500,
        next
      );
    });
};

exports.getDelivery = async (req, res, next) => {
  if (req.code) {
    const result = await req.code;
    const formattedResult = transformDeliveryData(result);
    res.status(200).send(formattedResult);
  } else {
    return sendError(
      "The site has an issue, dont worry, we working on it.",
      "fail",
      500,
      next
    );
  }
};

exports.logout = (req, res, next) => {
  destroy_session_mw(req, res, next);
};
