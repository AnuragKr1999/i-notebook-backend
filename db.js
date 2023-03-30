const mongoose = require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/i-notebook'

const connectToMongo = () => {
    mongoose.connect(mongoURI)
            .then(() => console.log('Connected to Mongoose'))
            .catch(err => console.log('Some error occured:',err))
}

module.exports = connectToMongo
