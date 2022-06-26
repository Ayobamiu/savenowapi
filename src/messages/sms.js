/** @format */

const { default: axios } = require("axios");

const formatPhoneNumNGN = (num) => {
  let result = num.replace(/ /g, "");
  if (result[0] === "0") {
    result.replace("0", "234");
  }
  return result;
};
const sendMessage = async (to, sms) => {
  await axios
    .post("https://api.ng.termii.com/api/sms/send", {
      to: formatPhoneNumNGN(to),
      from: "Usman",
      sms,
      type: "plain",
      api_key: process.env.TERMII_API_KEY,
      channel: "generic",
      // media: {
      //   url: "https://media.example.com/file",
      //   caption: "your media file",
      // },
    })
    .then((response) => console.log("response", response))
    .catch((error) => console.log("error", error.response.data));
};
module.exports = sendMessage;
