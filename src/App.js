import React, { Component } from 'react';
import './App.css';
import Person from './components/person.js'
import Book from './components/book.js'

// JSX
class App extends Component {
  state = {
    books: [
      { bookName: 'Da Vinci Code', writer: 'Dan Brown' },
      { bookName: 'The Alchemist', writer: 'Paulo Coelho' }
    ],
    anotherProperty: "I'm another property"
  }

  changeBookState = (x) => {
    // Normal JavaScript is not applicable here
    this.setState({
      books: [
        { bookName: x, writer: 'Franz Kafka' },
        { bookName: 'The Alchemist', writer: 'Paulo Coelho' }
      ],
      anotherProperty: "I'm anotherAnother property"
    });
  }
  changeWithInputElement = (x) => {
    this.setState({
      books: [
        { bookName: 'Da Vinci Code', writer: 'Dan Brown' },
        { bookName: x, writer: 'Paulo Coelho' }
      ],
      anotherProperty: "I'm anotherAnother property"
    });
  }
  render() {
    // console.log(this.state);
    return React.createElement('div', { className: "App" },
      React.createElement('h1', null, 'Book List'),
      React.createElement('button', { onClick: this.changeBookState.bind(this, 'Ow ow ow') }, 'Change State'),
      <Book bookName={this.state.books[0].bookName}
        writer={this.state.books[0].writer} />,
      <Person bookName={this.state.books[1].bookName}
        writer={this.state.books[1].writer}
        change={() => this.changeWithInputElement('Wow wow wow')} />
      // <Person2 name="Abdur Rahman" age="30">I'm 1st person2</Person2>,
      // <Person2 name="Abdur Razzaq" age="31">I'm 2nd person2</Person2>
    );
  }
}

export default App;
