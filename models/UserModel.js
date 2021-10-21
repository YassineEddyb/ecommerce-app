const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    ref: "User",
    required: [true, "email is rquired"],
  },
  picture: {
    type: String,
  },
  cart: {
    cartProducts : [mongoose.Schema.ObjectId],
    quantity: Number,
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
