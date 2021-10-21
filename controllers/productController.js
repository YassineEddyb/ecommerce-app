const Product = require("../models/ProductModel");

exports.getAllProducts = async (req, res, next) => {
  console.log("all products");
  res.status(200).json({ status: "success" });
};

exports.postProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json({ status: "success", product });
  } catch (err) {
    res.status(400).json({ status: "failure" });
    console.log(err);
  }
};
