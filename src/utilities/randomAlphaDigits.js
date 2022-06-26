/** @format */

const alphaDigits =
  "0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
const generateRandom = (num) => {
  let result = "";
  for (let index = 0; index < num; index++) {
    const rand = Math.round(Math.random() * alphaDigits.length);
    result += alphaDigits[rand];
  }

  return result;
};

module.exports = generateRandom;
