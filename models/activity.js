const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  img: String,
  title: String,
  description: String,
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
