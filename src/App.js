import React, { Component } from 'react';
import './App.css';
// import Person from './components/person.js'
import Book from './components/book.js'

class App extends Component {
  state = {
    books: [
      { id: 1, bookName: 'Da Vinci Code', writer: 'Dan Brown' },
      { id: 2, bookName: 'The Alchemist', writer: 'Paulo Coelho' },
      { id: 3, bookName: '1984', writer: 'George Parwell' }
    ]
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
  changeWithInputElement = (event, index) => {
    const book = this.state.books[index];
    book.bookName = event.target.value;
    const books = this.state.books;
    books[index] = book;
    this.setState({ books: books });
  }
  deleteBookFromState = index => {
    const books = this.state.books;
    // const books = this.state.books.slice();
    // const books = [...this.state.books];
    // const books = this.state.books.map(item => item)
    books.splice(index, 1);
    this.setState({ books: books });
  }
  render() {
    const books = this.state.books.map((book, index) => {
      return (
        <Book bookName={book.bookName}
          writer={book.writer}
          delete={() => this.deleteBookFromState(index)}
          change={(event) => this.changeWithInputElement(event, index)}
          key={book.id} />
      );
    });
    return React.createElement('div', { className: "App" },
      React.createElement('h1', null, 'Book List'),
      React.createElement('button', { onClick: this.changeBookState.bind(this, 'Ow ow ow') }, 'Change State'),
      books);
  }
}

export default App;
