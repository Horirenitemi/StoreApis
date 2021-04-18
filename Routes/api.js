const Router = require("express").Router();

const {
  productIndex,
  createNewProduct,
  updateProduct,
  getSingleProduct,
  deleteProduct
} = require("../Controllers/ProductsController");

Router.route("/products")
  .get(productIndex)
  .post(createNewProduct);
Router.route("/products/:id")
  .patch(updateProduct)
  .get(getSingleProduct)
  .delete(deleteProduct);

module.exports = Router;
