const Article = require('../models/article')

module.exports = {
  create (data) {
    const article = new Article(data)
    return article.save()
  },

  findById (id) {
    return Article.findOne({ _id: id })
  },

  update (id, article) {
    return Article.findOneAndUpdate({ _id: id }, { $set: article }, { new: true })
  }
}
