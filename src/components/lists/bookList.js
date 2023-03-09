import React, { Component } from 'react';
import Book from '../representational/book.js'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Booklist extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return this.props.books.map((book, index) => {
            return (
                <Link to={'/' + book.id} key={book.id} style={{ textDecoration: 'none', color: 'black' }}>
                    <Book bookName={book.bookName}
                        writer={book.writer}
                        selectedBookHandler={() => this.props.selectedBookHandler(book.id)} />
                </Link>

            );
        });
    }
}

export default withRouter(Booklist);