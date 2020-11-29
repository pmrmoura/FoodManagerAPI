const config = require("../config/auth.config");
const { restaurant } = require("../models");
const db = require("../models");
const Restaurant = db.restaurant;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.listRestaurant = (req, res) => {
  const id = req.params.id
  Restaurant.findById(
    id
  )
  .populate('products')
  .exec((err, restaurante) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!restaurante) {
      return res.status(404).send({ message: "Restaurant Not found." });
    }

    res.status(200).send(
      {
        username: restaurante.username,
        email: restaurante.email,
        products: restaurante.products
      }
    );
  })
}