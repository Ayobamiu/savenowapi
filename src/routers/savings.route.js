/** @format */

const express = require("express");
const SavingsController = require("../controllers/savings.controller");
const auth = require("../middlewares/auth.middleware");
const AddSavingsPlanValidator = require("../validations/savings/addSavingsPlan.validator");

const router = express.Router();

router.post(
  "/",
  auth,
  AddSavingsPlanValidator.validateData(),
  AddSavingsPlanValidator.myValidationResult,
  SavingsController.addSavingsPlan
);
router.post("/add-savings/:planId", SavingsController.addSavings);
router.get("/", auth, SavingsController.getAllMySavingsPlans);
router.get("/savingsId", SavingsController.viewSavingsPlan);
router.delete("/savingsId", SavingsController.deleteSavingsPlan);

module.exports = router;
