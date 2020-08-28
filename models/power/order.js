const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  createOrder: { type: Boolean, default: false },
  applyDiscount: { type: Boolean, default: false },
});

module.exports = orderSchema;
