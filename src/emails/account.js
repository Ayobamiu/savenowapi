/** @format */

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const fromEmail = "contact@useripples.com";
const fromname = "Ripples";

const sendEmail = (to, subject, html) => {
  const msg = {
    to,
    from: {
      email: fromEmail,
      name: fromname,
    },
    subject,
    html,
  };

  sgMail.send(msg);
};
const resetPasswordMessage = (email, token) => {
  const msg = {
    to: email,
    from: {
      email: fromEmail,
      name: fromname,
    },
    subject: "Reset Password",
    text: `Click the followiing link to reset password  ${process.env.ORIGIN_URL}/create-new-password?token=${token} This link expires in 1 hour.`,
  };

  sgMail.send(msg);
};

module.exports = {
  resetPasswordMessage,
  sendEmail,
};
