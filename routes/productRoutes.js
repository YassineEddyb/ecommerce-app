const express = require("express");

const productController = require("../controllers/productController");
const { productValidator } = require("../utills/validators");

const router = express.Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productValidator, productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productValidator, productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
