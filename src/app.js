/** @format */

//import
const express = require("express");
const cors = require("cors");
const authRoute = require("./routers/auth.route");
const withdrawRoute = require("./routers/withdraw.route");
const savingsRoute = require("./routers/savings.route");

require("./db/mongoose");
// require("./schedules/email");
//create express App

const app = express();
//
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/withdraw", withdrawRoute);
app.use("/savings", savingsRoute);

module.exports = app;
