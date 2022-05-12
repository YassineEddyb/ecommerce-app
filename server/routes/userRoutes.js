const express = require("express");

const userController = require("../controllers/userController");
const authcontroller = require("../controllers/authController");
const {
  registerValidator,
  updateUserValidator,
} = require("../utills/validators");

const router = express.Router();

router
  .route("/me")
  .get(authcontroller.protectRoute, userController.getMe)
  .patch(authcontroller.protectRoute, userController.updateMe);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(registerValidator, userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(updateUserValidator, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
