const Product = require("../models/ProductModel");
const ApiError = require("../utills/api-error");
const catchAsync = require("../utills/catchAsync");

exports.getAllProducts = async (req, res, next) => {
  const products = await Product.find();

  if (!products[0]) return next(new ApiError("there is no porducts", 400));

  res.status(200).json({ status: "success", products });
};

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    next(new ApiError("there is no product with that id", 404));
    return;
  }

  res.status(200).json({ status: "success", product });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({ status: "success", product });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    next(new ApiError("there is no product with that id", 404));
    return;
  }

  res.status(200).json({ status: "success", product });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new ApiError("there is no product with that id", 404));
  }

  res.status(200).json({ status: "success" });
});
