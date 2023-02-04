const express = require("express");

const router = express.Router();

const {
  userSignUp,
} = require("../controler/user.con");


router.post("/signup", userSignUp);

module.exports = router;