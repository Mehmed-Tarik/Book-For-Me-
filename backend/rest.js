const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

// MIDELVARES use()
app.use(cors())
app.use(express.json()) // allow us to parse JSON

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true  })

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection estabishes successfilly");
})

const BookCardRouter = require('./routes/BookCard')
const FilteredBooks = require('./routes/filterBookCards')
const FilteredBooksTwo = require('./routes/filterBookCardsTwo')

const UserRouter = require('./routes/User')

app.use('/bookcard', BookCardRouter)
app.use('/filteredBooks', FilteredBooks)
app.use('/filteredBooksTwo', FilteredBooksTwo)

app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})