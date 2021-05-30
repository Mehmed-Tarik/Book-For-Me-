const router = require('express').Router()
let BookCard = require('../models/BookCard.model')
let Nationality = require('../models/Nationality.model')
let Genre = require('../models/Genre.model')

// Book Card
router.route('/').get((req,res) => {
    BookCard.find()
    .then(book => res.json(book))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {
    const image = req.body.image
    const title = req.body.title
    const authorName = req.body.authorName
    const authorNacionality = req.body.authorNacionality
    const yearOfPublish = Date.parse(req.body.yearOfPublish)
    const genre = req.body.genre
    const pageNumber = Number(req.body.pageNumber)
    const summary = req.body.summary
    const aboutAuthor = req.body.aboutAuthor
    const mainCarNationality = req.body.mainCarNationality
    const filters = req.body.filters
    const pdf = req.body.pdf
    const rating = req.body.rating
    const comment = req.body.comment

    const newBookCard = new BookCard({
        image,
        title,
        authorName,
        authorNacionality,
        yearOfPublish,
        genre,
        pageNumber,
        summary,
        aboutAuthor,
        mainCarNationality,
        filters,
        pdf,
        rating,
        comment
    })

    newBookCard.save()
    .then(() => res.json('Book Card added!' + newBookCard))
    .catch(err => res.status(400).json(`Error:  ${err}`))
})

// Nationality
router.route('/nationality').get((req,res) => {
    Nationality.find()
    .then(nation => res.json(nation))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/nationality/add').post((req,res) => {
    const nationality = req.body.nationality

    const newNationality = new Nationality({
        nationality
    })

    newNationality.save()
    .then(() => res.json('Nationality added!' + newNationality))
    .catch(err => res.status(400).json(`Error:  ${err}`))
})

// Nationality
router.route('/genre').get((req,res) => {
    Genre.find()
    .then(genre => res.json(genre))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/genre/add').post((req,res) => {
    const genre = req.body.genre

    const newGenre = new Genre({
        genre
    })

    newGenre.save()
    .then(() => res.json('Genre added!' + newGenre))
    .catch(err => res.status(400).json(`Error:  ${err}`))
})


module.exports = router