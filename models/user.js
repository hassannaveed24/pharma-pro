const config = require("config");
const jwt = require("js");
const mongoose = require("mongoose");

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    name: {
      type: String,
      required: "Name is required",
    },
    username: {
      type: String,
      required: "username is required",
      unique: true,
    },
    password: {
      type: String,
      required: "Password is required",
      minlength: 5,
      maxlength: 1024,
    },
    phoneNumber: {
      type: String,
      required: "Contact Number is required",
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  })
);

module.exports = User;
