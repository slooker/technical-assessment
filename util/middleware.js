const config = require('../config')
module.exports = {
  authApiKey(req, res, next) {
    // Normally we'd do some sort of database lookup here to validate an API key
    if (req.headers.authorization === config.apiKey) {
      return next()
    }
    const error = new Error('Unauthorized')
    error.status = 401
    return next(error)
  }
}