import React,{Component} from 'react';
import Book from '../representational/book.js'


class Booklist extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return this.props.books.map((book, index) => {
            return (
                <Book bookName={book.bookName}
                    writer={book.writer}
                    delete={() => this.props.deleteBookFromState(index)}
                    change={(event) => this.props.changeWithInputElement(event, index)}
                    key={book.id} />
            );
        });
    } 
}

export default Booklist;