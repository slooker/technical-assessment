const mongoose = require('../db')

const Schema = mongoose.Schema,
      ObjectId = mongoose.ObjectId

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', User)