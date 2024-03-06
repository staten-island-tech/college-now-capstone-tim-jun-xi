const mongoose = require("mongoose");
const slugify = require("slugify");
const songSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a song name",
  },
  slug: String,
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
  this.slug = slugify(this.name);
  next();
});
module.exports = mongoose.model("Song", songSchema);
