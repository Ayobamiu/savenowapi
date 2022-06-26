/** @format */

const { check, validationResult } = require("express-validator");

class AddValidProduct {
  static validateData() {
    return [
      check("title")
        .exists()
        .withMessage("Title is required")
        .not()
        .isEmpty()
        .withMessage("Title cannot be empty")
        .isString()
        .withMessage("Title should be a String"),
      check("description")
        .exists()
        .withMessage("Description is required")
        .not()
        .isEmpty()
        .withMessage("Description cannot be empty")
        .isString()
        .withMessage("Description should be a String"),
      check("price")
        .exists()
        .withMessage("Price is required")
        .not()
        .isEmpty()
        .withMessage("Price cannot be empty"),
      check("store")
        .exists()
        .withMessage("Store is required")
        .isMongoId()
        .withMessage("Store should be a Mongo ID"),
    ];
  }

  static async myValidationResult(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errArr = errors.array().map(({ msg }) => msg);
      return res.status(400).json({
        status: "400 Invalid Request",
        error: "Your request contains invalid parameters",
        errors: errArr,
      });
    }
    return next();
  }
}
module.exports = AddValidProduct;
