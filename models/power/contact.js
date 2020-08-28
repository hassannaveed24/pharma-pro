const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  reviewAllContacts: {
    type: Boolean,
    required: true,
    default: false,
  },
  reviewPatients: {
    type: Boolean,
    required: true,
    default: false,
  },
  reviewVendors: {
    type: Boolean,
    required: true,
    default: false,
  },
  reviewEmployees: {
    type: Boolean,
    required: true,
    default: false,
  },
  createAllContacts: {
    type: Boolean,
    required: true,
    default: false,
  },
  createPatients: {
    type: Boolean,
    required: true,
    default: false,
  },
  createVendors: {
    type: Boolean,
    required: true,
    default: false,
  },
  createEmployees: {
    type: Boolean,
    default: false,
  },
  editAllContacts: {
    type: Boolean,
    required: true,
    default: false,
  },
  editPatients: {
    type: Boolean,
    required: true,
    default: false,
  },
  editVendors: {
    type: Boolean,
    required: true,
    default: false,
  },
  editEmployees: {
    type: Boolean,
    required: true,
    default: false,
  },
  deleteAllContacts: {
    type: Boolean,
    required: true,
    default: false,
  },
  deletePatients: {
    type: Boolean,
    required: true,
    default: false,
  },
  deleteVendors: {
    type: Boolean,
    required: true,
    default: false,
  },
  deleteEmployees: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = contactSchema;
