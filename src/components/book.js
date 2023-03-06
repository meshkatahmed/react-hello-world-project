import React from 'react';
import '../stylesheets/style.css'

const Book = props => {
    const style = {
        margin: 'auto',
        marginBottom: '10px',
        backgroundColor: 'aqua'
    };
    return (
        <div style={style} className='book'>
            <h3>Book Name: {props.bookName}</h3>
            <h4>Writer: {props.writer}</h4>
        </div>
    );
}

export default Book;