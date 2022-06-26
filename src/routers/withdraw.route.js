/** @format */

const express = require("express");
const WithdrawalController = require("../controllers/withdrawal.controller");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/name", WithdrawalController.getBankName);

module.exports = router;
