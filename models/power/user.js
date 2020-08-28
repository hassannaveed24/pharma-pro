const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  manageUsers: { type: Boolean, default: false },
});

module.exports = userSchema;
