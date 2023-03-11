import React, { Component } from 'react';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.bookName = React.createRef();
        this.writer = React.createRef();
        this.description = React.createRef();
    }
    handleSubmit = event => {
        console.log(this.bookName.current.value);
        console.log(this.writer.current.value);
        console.log(this.description.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>New book entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Name: </label>
                    <input type='text' name='bookName' ref={this.bookName} />
                    <br />
                    <br />
                    <label>Writer: </label>
                    <input type='text' name='writer' ref={this.writer} />
                    <br />
                    <br />
                    <label>Description: </label>
                    <textarea name='description' ref={this.description} />
                    <br />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }

}

export default NewBook;