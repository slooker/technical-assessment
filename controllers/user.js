const User = require('../models/user')

module.exports = {
  createUser(data) {
    const user = new User({
      name: data.name,
      avatar: data.avatar
    })
    return user.save()
  }
}