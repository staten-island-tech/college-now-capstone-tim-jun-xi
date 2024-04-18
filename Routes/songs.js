const express = require("express");
const router = new express.Router();
const songController = require("../Controllers/songController");

router.get("/", songController.getSongs);
router.post("/add", songController.createSong);
router.post("/songs", songController.addToPlaylist);
router.patch("/shop/:id", songController.updateSongs);
router.delete("/shop/:id", songController.deleteSong);

module.exports = router;
