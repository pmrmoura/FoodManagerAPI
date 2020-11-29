const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.restaurant = require("./restaurant.model");
db.product = require("./product.model");
db.sale = require("./sale.model");

module.exports = db;