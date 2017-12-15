/* global describe, it */

const User = require('../models/user')
const should = require('chai').should() // eslint-disable-line no-unused-vars

describe('create user', () => {
  it(' should create a user with valid input', () => {
    const user = new User({ name: 'shawn', avatar: 'http://123.com/123.jpg' })
    user.name.should.equal('shawn')
    user.avatar.should.equal('http://123.com/123.jpg')
  })

  it(' should fail creating a user without a name', () => {
    const user = new User({ avatar: 'http://123.com/123.jpg' })
    user.validate()
    .catch((err) => {
      err.message.should.equal('User validation failed: name: Path `name` is required.')
    })
  })

  it(' should fail creating a user without an avatar', () => {
    const user = new User({ name: 'shawn' })
    user.validate()
    .catch((err) => {
      err.message.should.equal('User validation failed: avatar: Path `avatar` is required.')
    })
  })
})
