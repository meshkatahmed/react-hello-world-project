import React from 'react';
import Book from '../representational/book.js'


const Booklist = props => {
    return props.books.map((book, index) => {
        return (
            <Book bookName={book.bookName}
                writer={book.writer}
                delete={() => props.deleteBookFromState(index)}
                change={(event) => props.changeWithInputElement(event, index)}
                key={book.id} />
        );
    });
}

export default Booklist;