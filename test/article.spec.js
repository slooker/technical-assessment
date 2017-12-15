/* global describe, it */

const mongoose = require('mongoose')
const Article = require('../models/article')
const should = require('chai').should() // eslint-disable-line no-unused-vars

const fakeArticle = { userId: '5a334f578fb089cb5a24aeea', title: 'Fake Article', text: 'Text for fake article', tags: ['awesome', 'article'] }

describe('create article', () => {
  it(' should create an article with valid input', () => {
    const article = new Article(fakeArticle)
    mongoose.Types.ObjectId.isValid(fakeArticle.userId).should.equal(true)
    article.title.should.equal(fakeArticle.title)
    article.text.should.equal(fakeArticle.text)
    article.tags.length.should.equal(2)
  })

  it(' should fail creating an article without a userId', () => {
    const badArticle = JSON.parse(JSON.stringify(fakeArticle)) // This is an ugly way to dereference
    delete badArticle['userId']
    const article = new Article(badArticle)
    article.validate()
    .catch((err) => {
      err.message.should.equal('Article validation failed: userId: Path `userId` is required.')
    })
  })

  it(' should fail creating an article without a title', () => {
    const badArticle = JSON.parse(JSON.stringify(fakeArticle)) // This is an ugly way to dereference
    delete badArticle['title']
    const article = new Article(badArticle)
    article.validate()
    .catch((err) => {
      err.message.should.equal('Article validation failed: title: Path `title` is required.')
    })
  })

  it(' should fail creating an article without text', () => {
    const badArticle = JSON.parse(JSON.stringify(fakeArticle)) // This is an ugly way to dereference
    delete badArticle['text']
    const article = new Article(badArticle)
    article.validate()
    .catch((err) => {
      err.message.should.equal('Article validation failed: text: Path `text` is required.')
    })
  })
})
