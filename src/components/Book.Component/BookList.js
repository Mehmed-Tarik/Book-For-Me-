import React from 'react'
import BookCard from './BookCard'

import './Book.style.css'

const BookList = (props) => {
    return (
        <>
        <div className='row'>
                {
                    props.books.map((book, i) => {
                        return <BookCard 
                                        key = {i} // must provide key when passing like this in commponent
                                        image = {book.image}
                                        title = {book.title}
                                        author = {book.authorName}
                                        pdf = {book.pdf}
                                        matchedMessage = {book.matchedMessage} 
                                        published = {book.yearOfPublish.substring(0,4)}
                                        page_number = {book.pageNumber}
                                        summary = {book.summary}
                                        aboutAuthor = {book.aboutAuthor}
                                        />
                    })
                }
        </div>
        </>
    )
}

export default BookList