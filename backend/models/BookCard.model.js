const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookCardSchema = new Schema({
    image: {type: String},
    title: {type: String},
    authorName: {type: String},
    authorNacionality: {type: String},
    yearOfPublish: {type: Date},
    genre: [String],
    pageNumber: {type: Number},
    shortSummary: {type: String},
    summary: {type: String},
    aboutAuthor: {type: String},
    mainCarNationality: {type: String},
    filters: [Boolean],
    matched: {type: Number},
    matchedMessage: {type: String},
    pdf: {type: String},
    rating: {type: Number},
    comment: {type: String}
})

const BookCard = mongoose.model('BookCard', BookCardSchema)
module.exports = BookCard