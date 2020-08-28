const mongoose = require("mongoose");
const powerSchema = require("./power/power");

const Role = mongoose.model(
  "roles",
  new mongoose.Schema({
    value: { type: String },
    powers: {
      type: powerSchema,
    },
  })
);

module.exports = Role;
