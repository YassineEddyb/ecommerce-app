const Product = require("../models/ProductModel");
const ApiError = require("../utills/api-error");
const catchAsync = require("../utills/catchAsync");

exports.getAllProducts = async (req, res, next) => {
  const products = await Product.find();

  if (!products[0]) return next(new ApiError("there is no porducts", 400));

  res.status(200).json({ status: "success", products });
};

exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({ status: "success", product });
});
