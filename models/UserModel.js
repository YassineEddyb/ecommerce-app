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
    minlength: [6, "password must be more than 6 characters"],
    maxlength: [18, "password must be less than 18 characters"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "password confirm is required"],
    minlength: [6, "password must be more than 6 characters"],
    maxlength: [18, "password must be less than 18 characters"],
  },
  picture: {
    type: String,
  },
  cart: {
    cartProducts: [mongoose.Schema.ObjectId],
    quantity: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
