// login controller
const { validationResult, check } = require("express-validator");

exports.validateLogin = [
  check("username")
    .notEmpty()
    .trim()
    .escape()
    .isAlphanumeric()
    .withMessage("Username must be alphanumeric")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage("Username must be between 6-12 letters"),

  check("password")
    .notEmpty()
    .trim()
    .escape()
    .isLength({
      min: 6,
    })
    .withMessage("Password must be at least 6 characters"),
];

exports.loginController = (req, res) => {
  try {
    // validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    // get input
    const { username, password } = req.body; // similar to req.body.username, req.body.password

    res.status(200).json({
      message: "Login success",
      data: {
        username,
        password,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
    });
  }
};
