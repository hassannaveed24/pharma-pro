const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose.connection);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  productImage: {
    type: String,
  },
  priority: {
    type: Number,
  },
}).plugin(autoIncrement.plugin, { model: "products", field: "priority" });
const Product = mongoose.model("products", productSchema);

exports.Product = Product;
exports.productSchema = productSchema;
// module.exports = Product;
// module.exports = productSchema;
