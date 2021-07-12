const { Router } = require("express");
const router = Router();
const User = require("../models/user");
const authController = require("../controllers/auth");
const access = require("../controllers/access");
const { body } = require("express-validator");
const isAuth = require("../middleware/is-auth");
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

router.get("/access", isAuth, access);

module.exports = router;
