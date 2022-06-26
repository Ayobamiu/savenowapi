/** @format */

const mongoose = require("mongoose");

const SavingsPlanSchema = mongoose.Schema(
  {
    title: { type: String },
    duration: { type: String },
    savingScheme: { type: String, enum: ["rainyDays", "goals"] },
    strictLevel: { type: String, enum: ["mild", "fair", "strict", "none"] },
    yieldDate: { type: Date },
    salesGoal: { type: Number },
    amount: { type: Number, default: 0 },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);
SavingsPlanSchema.virtual("savings", {
  ref: "Savings",
  localField: "_id",
  foreignField: "savingsPlan",
});
const SavingsPlan = mongoose.model("SavingsPlan", SavingsPlanSchema);

module.exports = SavingsPlan;
