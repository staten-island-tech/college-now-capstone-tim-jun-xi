const express = require("express");
const router = new express.Router();
const shopController = require("../Controllers/songController");
const authController = require("../Controllers/authController");

router.get("/", shopController.getSongs);
router.post("/add", shopController.createSong);
router.patch("/shop/:id", shopController.updateSongs);
router.delete("/shop/:id", shopController.deleteSong);

module.exports = router;
