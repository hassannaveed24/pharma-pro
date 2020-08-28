const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
  reviewDailySales: {
    type: Boolean,
    default: false,
    required: true,
  },
  reviewDailyOrders: {
    type: Boolean,
    required: true,
    default: false,
  },
  reviewDailyProfits: {
    type: Boolean,
    required: true,
    default: false,
  },
  reviewOrdersbyCategory: {
    type: Boolean,
    required: true,
    default: false,
  },
  reviewOrdersbyProduct: {
    type: Boolean,
    required: true,
    default: false,
  },
  authorizeAudit: {
    type: Boolean,
    required: true,
    default: false,
  },
  deleteOrders: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = dashboardSchema;
