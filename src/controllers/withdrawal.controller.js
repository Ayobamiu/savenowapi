/** @format */

const Flutterwave = require("flutterwave-node-v3");
const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLUTTERWAVE_SECRET_KEY
);

class WithdrawalController {
  static async getBankName(req, res) {
    try {
      const details = {
        account_number: "0690000032",
        account_bank: "044",
      };
      const response = await flw.Misc.verify_Account(details);
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({
        message: " Erro getting account details",
      });
    }
  }
}
module.exports = WithdrawalController;
