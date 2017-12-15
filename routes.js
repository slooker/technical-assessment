const User = require('./controllers/user')
const Article = require('./controllers/article')

module.exports = (app) => {
  // Create user
  app.post('/user', (req, res, next) => {
    return User.create(req.body)
    .then(data => res.json(data))
    .catch(next)
  })

  // Create article
  app.post('/article', (req, res, next) => {
    return Article.create(req.body)
    .then(data => res.json(data))
    .catch(next)
  })

  // Edit article
  app.put('/article/:id', (req, res, next) => {
    return Article.update(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(next)
  })

  // Get article by id
  app.get('/article/:id', (req, res, next) => {
    return Article.findById(req.params.id)
    .then(data => {
      // If there's no id found, it will return a null object
      if (!data) {
        return res.status(404).send('Not found')
      }
      return res.json(data)
    })
    .catch(next)
  })

  // Delete article
  app.delete('/article/:id', (req, res, next) => {
    Article.delete(req.params.id)
    .then(() => res.json({ deleted: req.params.id }))
    .catch(next)
  })

  // Get all articles
  app.get('/articles', (req, res, next) => {
    Article.getAll()
    .then(data => res.json(data))
    .catch(next)
  })

  // Get list of articles by tag
  app.get('/articles/tag/:tag', (req, res, next) => {
    Article.findTag(req.params.tag)
    .then(data => res.json(data))
    .catch(next)
  })
}
