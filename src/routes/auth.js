const { Router } = require("express");

const router = Router();
const User = require("../models/user");
const authController = require("../controllers/auth");
const { body } = require("express-validator");

// Necesary to include some sort of sanitization in the validated fields

router.post(
  "/signup",
  [
    body("firstName").isAlpha(),
    body("lastName").isAlpha(),
    body("email").isEmail(),
  ],
  authController.signup
);

router.get("/login", authController.login);

module.exports = router;
