const mongoose = require("mongoose");
const stockSchema = new mongoose.Schema({
  reviewMedicine: { type: Boolean, required: true, default: false },
  createMedicine: { type: Boolean, default: false },
  editMedicine: { type: Boolean, default: false },
  deleteMedicine: { type: Boolean, default: false },
  //Equipments
  reviewEquipment: { type: Boolean, default: false },
  createEquipment: { type: Boolean, default: false },
  editEquipment: { type: Boolean, default: false },
  deleteEquipment: { type: Boolean, default: false },
  //Goods
  reviewGoods: { type: Boolean, default: false },
  createGoods: { type: Boolean, default: false },
  editGoods: { type: Boolean, default: false },
  deleteGoods: { type: Boolean, default: false },
});

module.exports = stockSchema;
