const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NationalitySchema = new Schema({
    nationality: {type: String}
})

const Nationality = mongoose.model('Nationality' , NationalitySchema)
module.exports = Nationality 