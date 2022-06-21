const express = require("express");
const activityRouter = express.Router();
const Activity = require("../models/activity");

// Index
activityRouter.get("/activity", async (req, res) => {
  try {
    const activity = await Activity.find({});
    res.json(activity);
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Create
activityRouter.post("/activity", async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    res.json(activity);
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Update
activityRouter.put("/activity/:id", async (req, res) => {
  try {
    res.json(
      await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Delete
activityRouter.delete("/activity/:id", async (req, res) => {
  try {
    res.json(await Activity.findByIdAndDelete(req.params.id));
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

module.exports = activityRouter;
