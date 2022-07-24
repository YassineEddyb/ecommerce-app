const express = require("express");
// const uuid = require("uuid");
const stripe = require("stripe")(process.env.SECRET_KEY);
const ApiError = require("../utills/api-error");

const catchAsync = require("../utills/catchAsync");

const router = express.Router();

router.route("/").post(
  catchAsync(async (req, res, next) => {
    let { cart } = req.body;

    if (!cart) return next(new ApiError("there is no cart", 404));

    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(
        cart.reduce(
          (acc, item) => acc + item.quantity * item.product.price,
          0
        ) * 100
      ),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res
      .status(200)
      .json({ status: "success", clientSecret: paymentIntent.client_secret });
  })
);

module.exports = router;
