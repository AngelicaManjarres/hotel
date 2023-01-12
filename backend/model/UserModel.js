const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema ({
    name:{
        type: String,
        required:true
    },
    username: {
        type:String,
        required: [true, {message: "Username required"}],
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    phone: {
        type:Number,
        required: true

    },
    document: {
        type:Number,
        required: true,
        unique: true
    },
    address: {
        hood:String,
        city:String,
        country:String
    },
    role: {
        type:String,
        require: [true, {message: "Role required"}]

    },
    salary:Number,
    start_date: Date,
    end_date: Date,
    last_online: Date
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel