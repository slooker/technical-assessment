const express = require('express')
const config = require('./config')
const bodyParser = require('body-parser')
const middleware = require('./util/middleware')

const app = express()

// Use auth middleware for all requests
app.use(middleware.authApiKey)


// parse JSON in the request body
app.use(bodyParser.json())

// Include routes from external file for cleanliness
const routes = require('./routes')(app) // eslint-disable-line no-unused-vars

// Default error handling.  This should catch any sort of application errors, and
// will default the status to `err.status`
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message)
})

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`)
})
