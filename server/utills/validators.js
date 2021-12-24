const { body } = require("express-validator");

exports.registerValidator = [
  body("email", "please enter a valid email").isEmail(),
  body("name", "name is required").exists({ checkFalsy: true }),
  body("password", "password must be between 6 and 18 characters").isLength({
    min: 6,
    max: 18,
  }),
  body("passwordConfirm").custom((value, { req }) => {
    if (value !== req.body.password)
      throw new Error("passwordConfirm doesn't match");
    return true;
  }),
];

exports.updateUserValidator = [
  body("email", "please enter a valid email").isEmail(),
  body("name", "name is required").exists({ checkFalsy: true }),
];

exports.productValidator = [
  body("name", "name is required").exists({ checkFalsy: true }),
  body("price", "price is required").isNumeric(),
];
