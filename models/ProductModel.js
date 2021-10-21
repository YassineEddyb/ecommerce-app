const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  picture: {
    type: String,
  },
  images: [String],
  desc: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 1,
    max: 5,
  },
  categories: [String],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
