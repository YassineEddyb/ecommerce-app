const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/UserModel");
const catchAsync = require("../utills/catchAsync");
const ApiError = require("../utills/api-error");

const createAndSendJWT = (user, res) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });
  res.status(200).json({ status: "success", token });
};

exports.register = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ApiError(errors.array(), 400));

  // encrypting password
  req.body.password = await bcrypt.hash(req.body.password, 12);
  req.body.passwordConfirm = undefined;

  // creating user
  const user = await User.create(req.body);

  createAndSendJWT(user, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ApiError(errors.array(), 400));

  const { email, password } = req.body;

  // find user by email
  const [user] = await User.find({ email });

  // check if there is a user with that email
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new ApiError("incorect email or passowrd!", 400));
  }

  createAndSendJWT(user, res);
});

exports.protectRoute = catchAsync(async (req, res, next) => {
  // getting the token from header
  let token;
  if (req.headers.authorization)
    token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return next(
      new ApiError("your not logged in please login to get accessed", 400)
    );
  }

  // verification
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return next(
        new ApiError("this token has expired please login again", 400)
      );
    } else {
      req.userId = decodedToken.id;
    }
  });

  next();
});
