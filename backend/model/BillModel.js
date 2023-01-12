const mongoose = require('mongoose')
const { Schema } = mongoose

const billSchema = new Schema({
    code: {
        type: String,
        required: [true, {message: "Codigo requerido"}],
        unique: true
    },
    nit: {
        type: String,
        required: [true, {message: "NIT requerido"}]
    },
    name: {
        type:String,
        required: [true, {message: "Nombre requerido"}]
    },
    reference: [{value:Number, title:String, amount:Number}],
    payment: {
        type:String,
        required: [true, {message:"Metodo requerido"}]
    },
    date: {
        type: Date,
        required: true
    }

})

const billModel = mongoose.model('bills', billSchema)

module.exports = billModel