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

// Seed Viewer?
seedRouter.get("/seed", async (req, res) => {
  res.send("Seed Data Home Page");
});

// Seed Planter
seedRouter.post("/seed/plant", async (req, res) => {
  seedData.deleteMany({}, (error, allSeeds) => {});

  seedData.create(Seed, (error, Seed) => {
    res.redirect("/seed");
    console.log("Planted");
  })
})

module.exports = seedRouter;


