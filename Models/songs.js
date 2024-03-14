const mongoose = require("mongoose");
const slugify = require("slugify");
const songSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a song name",
    unique: true,
  },
  slug: String, 
  artist: {
    type: String,
    trim: true,
    required: "Please enter the song's artist",
  },
  release: {
    type: Number,
    required: "Please enter the release year",
  },
  duration: {
    type: "String",
    trim: true,
    required: "Please enter the song's duration",
  },
});

songSchema.pre(`save`, function (next) { 
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name, { lower: true });
  next();
});
module.exports = mongoose.model("Song", songSchema);
