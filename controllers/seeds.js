const express = require("express");
const seedRouter = express.Router();
const Seed = require("../models/seed");

const mongoose = require("mongoose");
const seedSchema = new mongoose.Schema({
  title: String,
  img: String,
  description: String,
});
const seedData = mongoose.model("Seed", seedSchema);
module.exports = seedData;

// Seed Planter
seedRouter.get("/seed", (req, res) => {
  Seed.deleteMany({}, (error, fullList) => {});

  Seed.create(Seed, (error, data) => {
    res.redirect("/");
  });
});

module.exports = seedRouter;
