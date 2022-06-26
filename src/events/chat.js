/** @format */

// const sendEmail = require("../emails/emails");
const User = require("../model/user.model");
const { sendPushNotification } = require("../utilities/pushNotifications");

module.exports = (io, socket, users) => {
  socket.on("chat", async (msg) => {
    // io.to(`support:room:${msg.customer}`).emit("chat", msg);
  });
  socket.on("typing", () => {
    io.emit("typing");
  });
};
