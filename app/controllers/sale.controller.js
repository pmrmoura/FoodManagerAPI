const config = require("../config/auth.config");
const { restaurant, product } = require("../models");
const db = require("../models");
const Product = db.product;
const Sale = db.sale

exports.createSale = (req, res) => {
  const product_id = req.params.productId

  const sale = new Sale({
    quantity: req.body.quantity
  })
  const findProduct = async () => {
    const productFound = await Product.findById(product_id)
    sale.product = productFound._id

    const saleSaved = await sale.save()
    console.log(productFound)
    productFound.sales.push(saleSaved._id)
    productFound.save()
  }

  findProduct()

  res.status(200).send(sale)
};