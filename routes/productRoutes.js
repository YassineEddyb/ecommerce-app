const express = require("express");

const productController = require("../controllers/productController");
const authController = require("../controllers/authController");
const { productValidator } = require("../utills/validators");

const router = express.Router();

router
  .route("/")
  .get(authController.protectRoute ,productController.getAllProducts)
  .post(productValidator, productController.createProduct)
  .delete(productController.deleteAll);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productValidator, productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
