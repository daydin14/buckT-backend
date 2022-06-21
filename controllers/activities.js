const express =require("express");
const activityRouter = express.Router();
const Activity = require("../models/activity");

// Index
activityRouter.get("/activity", async (req,res) => {
    try {
        const activity = await Activity.find({});
        res.json(activity);
    } catch (error) {
        console.log("error:", error);
        res.json({ error: "Something Went Wrong - Check Console" });
    }
});

// Create
activityRouter.post("/activity", async (req,res) => {
    try {
        const activity = await Activity.create(req.body);
        res.json(activity);
    } catch (error) {
        console.log("error:", error);
        res.json({ error: "Something Went Wrong - Check Console" });
    }
});

// Update
// Delete


module.exports = activityRouter;