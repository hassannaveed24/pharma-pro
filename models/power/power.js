const mongoose = require("mongoose");
const dashboardSchema = require("./dashboard");
const contactSchema = require("./contact");
const stockSchema = require("./stock");
const expenseSchema = require("./expense");
const reportSchema = require("./report");
const orderSchema = require("./order");
const configSchema = require("./config");
const userSchema = require("./user");

const powerSchema = new mongoose.Schema({
  dashboard: {
    type: dashboardSchema,
    required: true,
  },
  contacts: {
    type: contactSchema,
    required: true,
  },
  stocks: {
    type: stockSchema,
    required: true,
  },
  expenses: {
    type: expenseSchema,
    required: true,
  },
  reports: {
    type: reportSchema,
    required: true,
  },
  orders: {
    type: orderSchema,
    required: true,
  },
  config: {
    type: configSchema,
    required: true,
  },
  users: {
    type: userSchema,
    required: true,
  },
});

module.exports = powerSchema;
