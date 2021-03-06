const Article = require('../models/article')

module.exports = {
  create (data) {
    const article = new Article(data)
    return article.save()
  },

  findById (id) {
    return Article.findOne({ _id: id })
  },

  getAll () {
    return Article.find()
  },

  update (id, article) {
    return Article.findOneAndUpdate({ _id: id }, { $set: article }, { new: true })
  },

  delete (id) {
    return Article.deleteOne({ _id: id })
  },

  findTag (tag) {
    return Article.find({ tags: tag })
  }
}
