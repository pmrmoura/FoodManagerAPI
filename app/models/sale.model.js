const mongoose = require("mongoose");

const Sale = mongoose.model(
  "Sale",
  new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
  }, { timestamps: true })
);

module.exports = Sale;