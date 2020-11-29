const mongoose = require("mongoose");

const Restaurant = mongoose.model(
  "Restaurant",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    ],
  })
);

module.exports = Restaurant;