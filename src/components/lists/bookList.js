import React,{Component} from 'react';
import Book from '../representational/book.js'


class Booklist extends Component {
    constructor(props) {
        super(props);
        console.log('BookList costructor!');
    }
    
    componentDidMount() {
        console.log('BookList componentDidMount!');
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log('U BookList should component update',nextProps,nextState)
        return true;
    }
   
    componentDidUpdate(){
        console.log('U BookList componentDidUpdate');
    }
    
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('U BookList getDerivedStateFromProps',nextProps,prevState);
        return prevState;
    }
    getSnapshotBeforeUpdate(){
        console.log('U BookList getSnapshotbeforeUpdate');
    }
    render() {
        console.log('BookList render!');
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