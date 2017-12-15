const User = require('./controllers/user')
const Article = require('./controllers/article')
const middleware = require('./util/middleware')

module.exports = (app) => {
  app.post('/user', middleware.authApiKey, (req, res, next) => {
    return User.create(req.body)
    .then(data => res.json(data))
    .catch(next)
  })

  app.post('/article', middleware.authApiKey, (req, res, next) => {
    return Article.create(req.body)
    .then(data => res.json(data))
    .catch(next)
  })

  app.put('/article/:id', middleware.authApiKey, (req, res, next) => {
    return Article.update(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(next)
  })

  app.get('/article/:id', middleware.authApiKey, (req, res, next) => {
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

  app.delete('/article/:id', middleware.authApiKey, (req, res, next) => {
    Article.delete(req.params.id)
    .then(() => res.json({ deleted: req.params.id }))
    .catch(next)
  })

  app.get('/articles/tag/:tag', middleware.authApiKey, (req, res, next) => {
    Article.findTag(req.params.tag)
    .then(data => res.json(data))
    .catch(next)
  })
}
