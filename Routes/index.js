const express = require("express");
const router = new express.Router();
const songController = require("../Controllers/songController");
const authController = require("../Controllers/authController");

router.get("/", songController.getSongs);
router.post("/add", songController.createSong);
router.patch("/shop/:id", songController.updateSongs);
router.delete("/shop/:id", songController.deleteSong);
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;

