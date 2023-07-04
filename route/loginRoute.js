// route for login
const express = require("express");
const router = express.Router();
const { loginController, validateLogin } = require("../controller/loginController");

// calling the controller, validate the input

router.post("/", validateLogin, loginController);

module.exports = router;
