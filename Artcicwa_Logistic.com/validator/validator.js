const { body, validationResult } = require("express-validator");

  module.exports = [
    body("tracking_code")
    .optional()
    .isString()
    .withMessage("Please Enter a Valid Code...")
    .escape(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(403).json({
          status: "fail",
          msg: "Please enter a valid tracking code...",
        });
      }
      // If validation passes, proceed to the next middleware/route handler
      next();
    },
  ]

