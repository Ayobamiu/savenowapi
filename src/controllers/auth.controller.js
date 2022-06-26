/** @format */

const bcrypt = require("bcryptjs");
const BankRecord = require("../model/bankRecord.model");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const { resetPasswordMessage, sendEmail } = require("../emails/account");
const {
  welcomeEmail,
  resetPasswordEmail,
} = require("../../emails/samples/emails");
const { default: axios } = require("axios");

class AuthController {
  static async signUpLite(req, res) {
    try {
      const emailExists = await User.findOne({ email: req.body.email });
      if (emailExists) {
        return res.status(400).send({
          error: "400 Bad request",
          message: "There is an Account with this Email. Try Logging in.",
        });
      }

      const user = new User({ ...req.body });
      const token = await user.generateAuthTokenLite();
      await user.save();
      sendEmail(user.email, "Welcome to Ripples", welcomeEmail(user.firstName));
      return res.status(201).send({ token, user });
    } catch (error) {
      return res.status(500).send({
        error: "500 Internal server error",
        message: "Error saving User",
      });
    }
  }
  static async loginLite(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({
          error: "404 not found",
          message: "Email is not registered",
        });
      }

      //compare if the password matches the password for the user
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          error: "400 Credentials not a match",
          message: "Credential is not a match",
        });
      }

      const token = await user.generateAuthTokenLite();
      return res.json({ token, user });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "400 Bad request", message: "Unable to login" });
    }
  }

  static async addExpoPushToken(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.user._id,
        {
          expoPushToken: req.body.expoPushToken,
        },
        { new: true }
      );

      if (!user) {
        return res.status(404).send({
          error: "404 not found",
          message: "User not found.",
        });
      }
      return res.send({
        _id: user._id,
        firstName: user.firstName,
        email: user.email,
        expoPushToken: user.expoPushToken,
      });
    } catch (error) {
      return res.status(500).send({
        error: "500 Internal server error",
        message: "Error updating User",
      });
    }
  }
  static async getProfile(req, res) {
    try {
      const user = await User.findById(req.user._id);
      if (!user) {
        return res
          .status(404)
          .send({ error: "404 not found", message: "Profile does not exist" });
      }
      return res.send(user);
    } catch (error) {
      return res
        .status(500)
        .send({ error: "500 Bad request", message: "Unable to fetch Profile" });
    }
  }
  static async logOut(req, res) {
    try {
      const header = req.header("Authorization");
      const tokenToRemove = req.header("Authorization").replace("Bearer ", "");

      if (header) {
        const decoded = jwt.verify(tokenToRemove, process.env.JWT_SECRET);
        const user = await User.findOne({
          _id: decoded._id,
          "tokens.token": tokenToRemove,
        });
        if (user) {
          user.tokens = user.tokens.filter(
            (token) => token.token !== tokenToRemove
          );
          await user.save();
        }
      }
      return res.send();
    } catch (error) {
      return res
        .status(400)
        .send({ error: "400 Bad request", message: "Unable to logout" });
    }
  }

  static async logOutMobile(req, res) {
    try {
      const tokenToRemove = req.header("Authorization").replace("Bearer ", "");
      if (req.user && tokenToRemove) {
        req.user.tokens = req.user.tokens.filter(
          (token) => token.token !== tokenToRemove
        );
        req.user.expoPushToken = "";
        await req.user.save();
      }
      return res.send();
    } catch (error) {
      return res
        .status(400)
        .send({ error: "400 Bad request", message: "Unable to logout" });
    }
  }
  static async deleteBankRecord(req, res) {
    try {
      const record = await BankRecord.findOneAndDelete({
        user: req.user._id,
        _id: req.params.recordId,
      });

      return res.send(record);
    } catch (error) {
      return res.status(500).send({
        error: "Internal server error",
        message: "Unable to delete bank record",
      });
    }
  }
  static async addBankRecord(req, res) {
    try {
      const existingRecord = await BankRecord.findOne({ ...req.body });

      if (existingRecord) {
        return res.status(400).send({
          error: "Internal server error",
          message: "You have this bank in record",
        });
      }
      const record = await BankRecord.create({
        user: req.user._id,
        ...req.body,
      });

      return res.send(record);
    } catch (error) {
      return res.status(500).send({
        error: "Internal server error",
        message: "Unable to add bank record",
      });
    }
  }
  static async getBankRecords(req, res) {
    try {
      const records = await BankRecord.find({
        user: req.user._id,
      });

      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  static async startPasswordReset(req, res) {
    const email = req.body.email;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .send({ error: "404 Not found", message: "Email not registered." });
      }
      const token = jwt.sign(
        { _id: user._id.toString(), email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      sendEmail(
        user.email,
        "Reset Password",
        resetPasswordEmail(
          `${process.env.ORIGIN_URL}/auth/create-new-password?token=${token}`
        )
      );
      return res.send({ message: "Reset password link sent", email });
    } catch (error) {
      return res.status(500).send({
        error: "500 Internal error",
        message: "Error sending Reset password link ",
      });
    }
  }

  static async sendPasswordResetCode(req, res) {
    try {
      sendEmail(
        req.body.email,
        "Password Reset code",
        `
      <div>
        <p>Your Password Reset code is ${req.body.code}</p>
      </div>
      `
      );
      return res.send({ message: "Password Reset code sent!" });
    } catch (error) {
      return res.status(400).send({
        error: "400 Bad request",
        message: "Unable to send Password Reset code",
      });
    }
  }

  static async resetPassword(req, res) {
    const token = req.body.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded._id;
    const userEmail = decoded.email;
    const password_one = req.body.password_one;
    const password_two = req.body.password_two;
    if (password_one !== password_two) {
      return res.status(400).send({
        error: "400 Invalid data",
        message: "Passwords are not a match.",
      });
    }
    try {
      const user = await User.findOne({ _id: userId, email: userEmail });
      if (!user) {
        return res.status(404).send({
          error: "404 Not found",
          message: "User not registered.",
        });
      }
      user.password = password_one;
      await user.save();
      return res.send({ message: "Password changed successfully", user });
    } catch (error) {
      return res.status(500).send({
        error: "500 Internal Error",
        message: "Server Error",
      });
    }
  }

  static async changePassword(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
      if (!user) {
        return res.status(401).send({
          error: "401 Not found",
          message: "Account not found",
        });
      }
      user.password = req.body.password;
      await user.save();

      return res.send({ message: "Password changed successfully" });
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
module.exports = AuthController;
