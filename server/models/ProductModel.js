const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "name is required"],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  picture: String,
  images: [String],
  desc: String,
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
  category: String,
  gender: String,
  size: [String],
  createdAt: { type: Date, default: Date.now() },
});

productSchema.index({ "$**": "text" });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
