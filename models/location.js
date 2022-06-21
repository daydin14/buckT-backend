const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  img: String,
  title: String,
  description: String,
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
