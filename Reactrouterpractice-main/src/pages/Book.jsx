import React from "react";
import { useParams } from "react-router-dom";
import books from '../data/books';

const Book = () => {
    const {bookslug} = useParams()
    
    const book = books.find((book) => book.slug === bookslug )
     console.log(book)
    return (
        book.title
    )
}

export default Book