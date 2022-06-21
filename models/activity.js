const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
  img: String,
  title: String,
  describtion: String
})

const Activity = mongoose.model('Activity', activitySchema)

module.export = Activity