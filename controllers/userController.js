const User = require("../models/UserModel");
const ApiError = require("../utills/api-error");
const bcrypt = require("bcryptjs");
const catchAsync = require("../utills/catchAsync");
const { validationResult } = require("express-validator");

exports.createUser = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ApiError(errors.array(), 400));

  const user = await User.create(req.body);

  user.password = await bcrypt.hash(req.body.password, 12);
  user.passwordConfirm = undefined;

  res.status(200).json({ status: "success", data: { user } });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({ status: "success", data: { users } });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ApiError("no user with that id found", 404));
  }

  res.status(200).json({ status: "success", data: { user } });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ApiError(errors.array(), 400));

  // prevent updating password from this route
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new ApiError("nice try, this midleware is not for changing password", 401)
    );
  }

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new ApiError("no user with that id found", 404));
  }

  res.status(200).json({ status: "success", data: { user } });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return next(new ApiError("no user with that id found", 404));
  }

  res.status(200).json({ status: "success" });
});
