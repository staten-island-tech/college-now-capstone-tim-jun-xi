const express = require("express");
const router = new express.Router();
const authController = require("../Controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
