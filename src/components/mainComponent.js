import React, { Component } from 'react';
import Booklist from './lists/bookList.js';
import books from '../assets/bookList.js';
import NewBook from './representational/newBook.js';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import BookDetail from './representational/bookDetail.js';

class MainComponent extends Component {
    state = {
        books: books,
        selectedBook: null
    }
    selectedBookHandler = bookID => {
        const book = this.state.books.filter(book =>
            book.id === bookID)[0];
        this.setState(
            { selectedBook: book }
        );
    }

    changeBookState = (x) => {
        // Normal JavaScript is not applicable here
        this.setState({
            books: [
                { bookName: x, writer: 'Franz Kafka' },
                { bookName: 'The Alchemist', writer: 'Paulo Coelho' },
                { bookName: '1984', writer: 'George Parwell' }
            ]
        });
    }

    render() {
        const books = <Booklist books={this.state.books}
            selectedBookHandler={this.selectedBookHandler} />
        return (
            <div className='App'>
                <nav className='nav-bar'>
                    <ul>
                        <li><NavLink to='/' exact>Home</NavLink></li>
                        <li><NavLink to='/new-book'>New Book</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/books' exact render={() => books} />
                    <Route path='/new-book' exact component={NewBook} />
                    <Route path='/:id' render={() => <BookDetail book={this.state.selectedBook} />} />
                    <Redirect from='/' to='/books'></Redirect>
                </Switch>
            </div>
        );
    }
}

export default MainComponent;