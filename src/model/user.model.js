/** @format */

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    profilePhoto: {
      type: String,
    },
    expoPushToken: {
      type: String,
    },
    tokens: [
      {
        token: {
          type: String,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.methods.generateAuthTokenLite = async function () {
  const user = this;

  const token = jwt.sign(
    {
      _id: user.toObject()._id,
      firstName: user.toObject().firstName,
      email: user.toObject().email,
      profilePhoto: user.toObject().profilePhoto,
      lastName: user.toObject().lastName,
    },
    process.env.JWT_SECRET
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (req, res, email, password) => {
  //check if user exists
  const user = await User.findOne({ email }).populate("addresses stores");
  if (!user) {
    return res.status(404).send({
      error: "404 not found",
      message: "Email is not registered",
    });
  }

  //compare if the password matches the password for the user
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(404).send({
      error: "404 Credentials not a match",
      message: "Credential is not a match",
    });
  }

  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
