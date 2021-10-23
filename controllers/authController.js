const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const User = require("../models/UserModel");
const catchAsync = require("../utills/catchAsync");
const ApiError = require("../utills/api-error");

exports.register = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ApiError(errors.array(), 400));

  // encrypting password
  req.body.password = await bcrypt.hash(req.body.password, 12);
  req.body.passwordConfirm = undefined;

  // creating user
  const user = await User.create(req.body);

  res.status(200).json({ status: "success", data: { user } });
});

exports.login = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ApiError(errors.array(), 400));

  const { email, password } = req.body;

  const [user] = await User.find({ email });

  // check if there is a user with that email
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new ApiError("incorect email or passowrd!", 400));
  }

  res.status(200).json({ status: "success" });
});
