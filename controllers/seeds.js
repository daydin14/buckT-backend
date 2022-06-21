const express = require("express");
const seedRouter = express.Router();
const Seed = require("../models/seed");

// Seed Planter
seedRouter.get("/seed", (req, res) => {
    Seed.deleteMany({}, (error, fullList) => {});

    Seed.create(Seed, (error, data) => {
        res.redirect("/");
    });
});