/** @format */

const { check, validationResult } = require("express-validator");

class AddSavingsPlanValidator {
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
      check("duration")
        .exists()
        .withMessage("duration is required")
        .not()
        .isEmpty()
        .withMessage("duration cannot be empty")
        .isString()
        .withMessage("duration should be a String"),
      check("savingScheme")
        .exists()
        .withMessage("savingScheme is required")
        .not()
        .isEmpty()
        .withMessage("savingScheme cannot be empty")
        .isString()
        .withMessage("savingScheme should be a String"),
      check("strictLevel")
        .exists()
        .withMessage("strictLevel is required")
        .not()
        .isEmpty()
        .withMessage("strictLevel cannot be empty")
        .isString()
        .withMessage("strictLevel should be a String"),
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
module.exports = AddSavingsPlanValidator;
