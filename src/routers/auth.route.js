/** @format */

const express = require("express");
const AuthController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.delete("/delete-bank/:recordId", auth, AuthController.deleteBankRecord);
router.post("/add-bank", auth, AuthController.addBankRecord);
router.patch("/password-reset", AuthController.resetPassword);
router.post("/change-password", AuthController.changePassword);
router.post("/password-reset-code", AuthController.sendPasswordResetCode);
router.post("/start-password-reset", AuthController.startPasswordReset);
router.post("/log-out-mobile", auth, AuthController.logOutMobile);
router.post("/log-out", AuthController.logOut);
router.post("/expoPushToken", auth, AuthController.addExpoPushToken);
router.get("/banks", auth, AuthController.getBankRecords);
router.post("/login", AuthController.loginLite);
router.post("/sign-up", AuthController.signUpLite);
router.get("/", auth, AuthController.getProfile);

module.exports = router;
