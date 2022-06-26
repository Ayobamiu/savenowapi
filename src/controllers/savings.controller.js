/** @format */

const Savings = require("../model/savings.model");
const SavingsPlan = require("../model/savingsPlan.model");

class SavingsController {
  static async addSavingsPlan(req, res) {
    try {
      const data = { user: req.user._id, ...req.body };
      const savingsPlan = await SavingsPlan.create(data);
      const populatedSavings = await SavingsPlan.findById(
        savingsPlan._id
      ).populate({
        path: "user",
      });
      res.status(200).send(populatedSavings);
    } catch (error) {
      res.status(500).send({
        message: " Erro adding savings",
      });
    }
  }
  static async addSavings(req, res) {
    try {
      const data = { savingsPlan: req.params.planId, amount: req.body.amount };
      console.log({ data });
      const savings = await Savings.create(data);
      const populatedSavings = await Savings.findById(savings._id).populate({
        path: "savingsPlan",
      });
      res.status(200).send(populatedSavings);
    } catch (error) {
      console.log("hie");
      res.status(500).send({
        message: " Erro adding savings",
      });
    }
  }
  static async deleteSavingsPlan(req, res) {
    try {
      const savingsPlan = await SavingsPlan.findOneAndDelete({
        _id: req.params.savingsId,
      });
      if (!savingsPlan) {
        return res.status(404).send({ message: "savings not found" });
      }
      return res.status(200).send(savingsPlan);
    } catch (error) {
      return res.status(500).send({ message: "Error deleting savings" });
    }
  }
  static async viewSavingsPlan(req, res) {
    try {
      const savingsPlan = await SavingsPlan.findById(
        req.params.savingsId
      ).populate({
        path: "user",
      });
      if (!savingsPlan) {
        return res.status(404).send({ message: "savings not found" });
      }
      return res.status(200).json(savingsPlan);
    } catch (error) {
      return res.status(500).send({ message: "Error getting savings" });
    }
  }
  static async getAllMySavingsPlans(req, res) {
    try {
      const savingsPlans = await SavingsPlan.find({
        user: req.user._id,
      })
        .populate({
          path: "user",
        })
        .populate("savings");
      if (!savingsPlans) {
        return res.status(404).send({ message: "savings not found" });
      }
      return res.status(200).json(savingsPlans);
    } catch (error) {
      return res.status(500).send({ message: "Error getting savings" });
    }
  }
}
module.exports = SavingsController;
