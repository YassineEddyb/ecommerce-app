const express = require("express");

const userController = require("../controllers/userController");
const {
  registerValidator,
  updateUserValidator,
} = require("../utills/validators");

const router = express.Router();

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
