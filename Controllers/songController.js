const Song = require("../Models/songs");

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
    const Songs = await Song.find().limit(3);
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
