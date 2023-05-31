const express = require("express");
const router = express.Router();

const auth = require("../middlware/userAuth");

const Signup = require("../controller/signUp");
const UserLogin = require("../controller/signIn");

router.post("/signup", Signup.signup);
router.post("/login", UserLogin.login);

module.exports = router;
