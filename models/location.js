const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  img: String,
  title: String,
  describtion: String
})

const Location = mongoose.model('Location', locationSchema)

module.export = Location