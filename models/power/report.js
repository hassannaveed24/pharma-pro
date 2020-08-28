const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema({
  reviewPatientsHistory: { type: Boolean, default: false },
  deletePatientsHistory: { type: Boolean, default: false },
  //Diagnostics
  reviewDiagnostics: { type: Boolean, default: false },
  deleteDiagnostics: { type: Boolean, default: false },
});

module.exports = reportSchema;
