const express = require('express')
const config = require('./config')
const bodyParser = require('body-parser')

const app = express()

// parse JSON in the request body
app.use(bodyParser.json())

// Include routes from external file for cleanliness
const routes = require('./routes')(app)

/*
User Model:
_id
name (String)
avatar (Url)

Article Model
_id
userId (User._id)
title (string)
text (string)
tags (array of strings)


*/

// Default error handling.  This should catch any sort of application errors, and
// will default the status to `err.status`
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message)
})


app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`)
})