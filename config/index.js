module.exports = {
  port: process.env.PORT || 8080,
  apiKey: process.env.API_KEY || 'ABC123',
  db: {
    url: process.env.DB_URL || 'localhost',
    dbName: process.env.DB_NAME || 'workast'
  }
}