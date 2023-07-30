const express = require("express");
const router = express.Router();
const {
  loginController,
  validateLogin,
  validateSignUp,
  signUpController,
} = require("../controllers/auth.controller");

// calling the controllers, validate the input

router.post("/login", validateLogin, loginController);

router.post("/signup", validateSignUp, signUpController);

module.exports = router;
