/** @format */

const mongoose = require("mongoose");

const SavingsSchema = mongoose.Schema(
  {
    amount: { type: Number, default: 0 },
    savingsPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SavingsPlan",
      required: true,
    },
  },
  { timestamps: true }
);
const Savings = mongoose.model("Savings", SavingsSchema);

module.exports = Savings;
