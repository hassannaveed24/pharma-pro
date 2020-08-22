const mongoose = require("mongoose");
const { productSchema } = require("../models/product");

const Order = mongoose.model(
  "orders",
  new mongoose.Schema({
    product: {
      type: productSchema,
      ref: "Product",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    totalPrice: {
      type: Number,
    },
  })
);

module.exports = Order;
