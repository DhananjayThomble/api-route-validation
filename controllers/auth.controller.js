const { validationResult, check } = require("express-validator");

//--------------------------------------------Login--------------------------------------------//

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

//--------------------------------------------Sign Up--------------------------------------------//

exports.validateSignUp = [
  check("username")
    .notEmpty()
    .trim()
    .escape()
    .isAlphanumeric()
    .withMessage("Username must be alphanumeric")
    .isLength({
      min: 3,
    })
    .withMessage("Username must be at least 3 characters"),
  check("password")
    .notEmpty()
    .trim()
    .escape()
    .isLength({
      min: 6,
    })
    .withMessage("Password must be at least 6 characters"),

  check("email")
    .notEmpty()
    .trim()
    .escape()
    .isEmail()
    .withMessage("Email must be valid"),

  check("phone")
    .notEmpty()
    .trim()
    .escape()
    // is indian phone number
    .isMobilePhone("en-IN")
    .withMessage("Phone number must be valid"),

  check("address")
    .notEmpty()
    .trim()
    .escape()
    .isLength({
      min: 10,
    })
    .withMessage("Address must be at least 10 characters"),

  check("pincode")
    .notEmpty()
    .trim()
    .escape()
    .isLength({
      min: 6,
    })
    .withMessage("Pincode must be at least 6 characters"),

  check("city")
    .notEmpty()
    .trim()
    .escape()
    .isLength({
      min: 3,
    })
    .withMessage("City must be at least 3 characters"),
];

exports.signUpController = (req, res) => {
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
    const { username, password, email, phone, address, pincode, city } =
      req.body;

    res.status(200).json({
      message: "Sign up success",
      data: {
        username,
        password,
        email,
        phone,
        address,
        pincode,
        city,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
    });
  }
};
