const mongoose = require("mongoose");
const expenseSchema = new mongoose.Schema({
  //purchase
  reviewPurchase: { type: Boolean, default: false },
  createPurchase: { type: Boolean, default: false },
  editPurchase: { type: Boolean, default: false },
  deletePurchase: { type: Boolean, default: false },
  //Payments
  reviewPayments: { type: Boolean, default: false },
  createPayments: { type: Boolean, default: false },
  editPayments: { type: Boolean, default: false },
  deletePayments: { type: Boolean, default: false },
});

module.exports = expenseSchema;
