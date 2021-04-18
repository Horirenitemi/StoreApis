const mongoose = require("mongoose");

const structure = mongoose.Schema({
  name: {
    type: String,
    unique: false,
  },
  code: {
    type: String,
    unique: true,
  },
  brand: {
    type: String,
    unique: false,
  },
  purchase_price: {
    type: Number,
    unique: false,
  },
  sales_price: {
    type: Number,
    unique: false,
  },
  quantity_available: {
    type: Number,
    unique: false,
  },
});

module.exports = mongoose.model("products", structure);
