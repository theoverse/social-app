const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb').MongoClient

mongodb.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client
    const app = require('./app')
    app.listen(process.env.PORT)
})