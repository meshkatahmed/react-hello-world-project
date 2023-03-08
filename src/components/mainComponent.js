import React, { Component } from 'react';
import Booklist from './lists/bookList.js';
import books from '../assets/bookList.js';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: books,
            showBooks: true
        }
        console.log('MainComponent constructor!');
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
    toggleBooks = () => {
        this.setState({
            showBooks: !this.state.showBooks
        })
    }
    
    componentDidMount() {
        console.log('MainComponent componentDidMount!');
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('U MainCOmponent shouldComponentUpdate',nextProps,nextState);
        return true;
    }
    
    componentDidUpdate() {
        // this.setState({showBooks:false});
        console.log('U MainComponent componentDidUpdate!');
    }
    
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('U MainComponent getDerivedStateFromProps',nextProps,prevState);
        return prevState;
    }
    getSnapshotBeforeUpdate(){
        console.log('U MainComponent getSnapshotbeforeUpdate');
    }

    render() {
        console.log('MainComponent render!');
        let books = null;
        if (this.state.showBooks) {
            books = <Booklist
                books={this.state.books}
                deleteBookFromState={this.deleteBookFromState}
                changeWithInputElement={this.changeWithInputElement} />
        }
        return React.createElement('div', { className: "App" },
            React.createElement('h1', null, 'Book List'),
            React.createElement('button', { onClick: this.toggleBooks }, 'Toggle Books'),
            books);
    }
}

export default MainComponent;