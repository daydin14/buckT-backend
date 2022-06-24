const express = require("express");
const locationRouter = express.Router();
const Location = require("../models/location");

// Index
locationRouter.get("/location", async (req, res) => {
  try {
    const location = await Location.find({});
    res.json(location);
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Create
locationRouter.post("/location", async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.json(location);
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Update
locationRouter.put("/location/:id", async (req, res) => {
  try {
    res.json(
      await Location.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Delete
locationRouter.delete("/location/:id", async (req, res) => {
  try {
    res.json(await Location.findByIdAndDelete(req.params.id));
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

module.exports = locationRouter;
