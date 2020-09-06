const mongoose = require("mongoose");
const powerSchema = require("./power/power");

const roleSchema = new mongoose.Schema({
  value: { type: String },
  powers: {
    type: powerSchema,
  },
});
const Role = mongoose.model("roles", roleSchema);

module.exports = { Role, roleSchema };
