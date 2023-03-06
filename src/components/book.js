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
            <input type="text" onChange={props.change} />
            <h3 onClick={props.delete}>Book Name: {props.bookName}</h3>
            <h4>Writer: {props.writer}</h4>
        </div>
    );
}

export default Book;