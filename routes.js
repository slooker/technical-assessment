const User = require('./controllers/user')
const Article = require('./controllers/article')

module.exports = (app) => {
  app.post('/user', (req, res, next) => {
    return User.create(req.body)
    .then(data => res.json(data))
    .catch(next)
  })

  app.post('/article', (req, res, next) => {
    return Article.create(req.body)
    .then(data => res.json(data))
    .catch(next)
  })

  app.put('/article/:id', (req, res, next) => {
    return Article.update(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(next)
  })

  app.get('/article/:id', (req, res, next) => {
    return Article.findById(req.params.id)
    .then(data => res.json(data))
    .catch(next)
  })

  app.delete('/article/:id', (req, res, next) => {

  })

  app.get('/articles/tag/:tag', (req, res, next) => {
  })
}
