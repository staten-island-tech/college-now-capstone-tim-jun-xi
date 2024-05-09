const Song = require("../Models/songs");
const User = require("../Models/User");

exports.homePage = async (req, res) => {
  const songs = ["KING", "suima", "Romance"];
  try {
    console.log(req.name);
    res.json(songs);
  } catch (error) {
    console.log(error);
  }
};

exports.createSong = async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.json(song);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getSongs = async (req, res) => {
  try {
    const Songs = await Song.find();
    res.json(Songs);
  } catch (error) {
    console.log(error);
  }
};

exports.updateSongs = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    const updates = Object.keys(req.body);
    updates.forEach((update) => (song[update] = req.body[update]));
    await song.save();
    res.json(song);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      res.status(404).send();
    }
    res.send(`${song.name} was deleted from the DB`);
  } catch (error) {
    console.log(error);
  }
};

exports.addToPlaylist = async (req, res) => {
  try {
    const { songId } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.playlist.push(songId);
    await user.save();
    res.json({ message: "Song added to playlist successfully" });
  } catch (error) {
    console.error("Error adding song to playlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
