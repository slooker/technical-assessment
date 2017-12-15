const mongoose = require('../db')
const Schema = mongoose.Schema

const Article = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  tags: [String]

})

module.exports = mongoose.model('Article', Article)
