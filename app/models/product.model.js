const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
    name: String,
    cost: Number,
    sellPrice: Number,
    profitMargin: Number,
    sales: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sale"
      }
    ],
  })
);

module.exports = Product;