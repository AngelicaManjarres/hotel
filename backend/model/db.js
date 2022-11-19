const mongoose = require('mongoose')
require('dotenv').config()

const conn = () => {
    mongoose.connect(process.env.ADMIN, {
        useNewUrlParseR: true,
        useUnifiedTopology: true
    })
}

module.exports = conn