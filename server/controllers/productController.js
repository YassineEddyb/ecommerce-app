const { validationResult } = require("express-validator");

const Product = require("../models/ProductModel");
const ApiError = require("../utills/api-error");
const catchAsync = require("../utills/catchAsync");
const ApiFeatures = require("../utills/api-features");

exports.getAllProducts = async (req, res, next) => {
  let data;
  if (req.query.q) {
    data = Product.find({ $text: { $search: req.query.q } });
  } else data = Product.find();

  const filter = new ApiFeatures(data, req.query).gender().category().price().size();

  const products = await filter.obj;

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
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ApiError(errors.array(), 400));

  const product = await Product.create(req.body);

  res.status(200).json({ status: "success", product });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ApiError(errors.array(), 400));

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

exports.deleteAll = catchAsync(async (req, res, next) => {
  await Product.deleteMany();

  res.status(200).json({ status: "success" });
});

exports.propularProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find().sort("price").limit(10);

  res.status(200).json({status: "success", products});
})
