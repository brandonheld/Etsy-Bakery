const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { User } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const { generateToken, AuthenticationError, getCurrentUser, } = require("../util/auth");
const { jwtConfig: { expiresIn }} = require('../../config');

const router = express.Router();

const validateLogin = [
  check("username").exists(),
  check("password").exists(),
];

const validateSignUp = [
  check("username")
    .isLength({ min: 1, max: 255 }),
  check("email")
    .exists()
    .isEmail(),
];

router.get(
  "/",
  getCurrentUser,
  asyncHandler(async function (req, res, next) {
    return res.json({
      user: req.user || {}
    });
  })
);

router.put(
  "/",
  validateLogin,
  handleValidationErrors,
  asyncHandler(async function (req, res, next) {
    const user = await User.login(req.body);
    if (user) {
      const token = await generateToken(user);
      res.cookie("token", token, {
        maxAge: expiresIn * 1000, // maxAge in milliseconds
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
      return res.json({
        user,
      });
    }
    return next(new Error('Invalid credentials'));
  })
);


router.post(
  "/",
  validateSignUp,
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    const user = await User.signup({
      username,
      email,
      password,
    });

    const token = await generateToken(user);
    res.cookie("token", token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return res.json({ 
      user,
     });
  })
);

router.delete(
  '/', 
  asyncHandler(async function (req,res) {
    res.clearCookie('token');
    res.json({ 
      message: 'success' 
    });
}));

module.exports = router;
