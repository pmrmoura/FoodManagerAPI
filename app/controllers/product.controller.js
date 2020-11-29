const config = require("../config/auth.config");
const db = require("../models");
const Restaurant = db.restaurant;
const Product = db.product;

exports.createProduct = (req, res) => {
  const restaurant_id = req.body.restaurant_id
  const product = new Product({
    name: req.body.name,
    cost: req.body.cost,
    sellPrice: req.body.sellPrice,
  })
  product.profitMargin = product.sellPrice / product.cost

  const findRestaurant = async () => {
    const foundRestaurant = await Restaurant.findById(restaurant_id)
    
    product.restaurant = foundRestaurant._id

    const productSaved = await product.save()

    foundRestaurant.products.push(productSaved._id)

    foundRestaurant.save()
  }

  findRestaurant()
  res.status(200).send('parabens')
}