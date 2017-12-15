const User = require('../models/user')

module.exports = {
  create (data) {
    const user = new User(data)
    return user.save()
  }
}
