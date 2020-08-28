const mongoose = require("mongoose");
const configSchema = new mongoose.Schema({
  manageConfig: { type: Boolean, default: false },
});

module.exports = configSchema;
