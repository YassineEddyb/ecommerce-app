const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is rquired"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  passwordConfirm: {
    type: String,
  },
  picture: {
    type: String,
  },
  cart: [
    {
      product: {},
      quantity: Number,
    },
  ],
});

productSchema.index({ "$**": "text" });

const User = mongoose.model("User", userSchema);

module.exports = User;
