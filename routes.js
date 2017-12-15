const User = require('./controllers/user')

module.exports = (app) => {
  app.post('/user', (req, res, next) => {
    return User.createUser(req.body)
    .then(data => res.json(data))
    .catch(next)
  })

  app.post('/article', (req, res, next) => {

  })

  app.put('/article/:id', (req, res, next) => {

  })

  app.delete('/article/:id', (req, res, next) => {

  })

  app.get('/articles/tag/:tag', (req, res, next) => {
    return res.json({
      _id: 123,
      name: 'shawn',
      avatar: 'https://i.imgur.com/hMVrRKv.png'
    })

  })
}