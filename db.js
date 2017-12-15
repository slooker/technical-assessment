const mongoose = require('mongoose')
const config = require('./config')

// Use native promises
mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${config.db.url}/${config.db.dbName}`, { useMongoClient: true });

module.exports = mongoose

