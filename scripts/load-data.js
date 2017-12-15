const User = require('../controllers/user')
const Article = require('../controllers/article')

const tags = ['article', 'tech', 'workast', 'slack', 'discord', 'chat', 'hipchat', 'spark']

User.create({ name: 'shawn looker', avatar: 'https://i.imgur.com/hMVrRKv.png' })
.then((user) => {
  const promises = []
  for (let i = 0; i < 5; i++) {
    console.log(`i: ${i}`)
    promises.push(
    Article.create({
      userId: user._id,
      title: `Article ${i}`,
      text: `Text for article ${i}`,
      tags: tags.slice(i)
    })
  )
  }
  Promise.all(promises)
    .then(() => {
      console.log('all done')
      process.exit()
    })
    .catch(err => console.error)

})