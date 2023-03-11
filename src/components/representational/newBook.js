import React, { Component } from 'react';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: '',
            writer: '',
            description: ''
        }
        this.handleInputChange = this.handleInputChange(this);
        this.handleSubmit = this.handleSubmit(this);
    }
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h1>New book entry</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Book Name: </label>
                    <input type='text' name='bookName' value={this.state.bookName}
                        onChange={this.handleInputChange} />
                    <br />
                    <br />
                    <label>Writer: </label>
                    <input type='text' name='writer' value={this.state.writer}
                        onChange={this.handleInputChange} />
                    <br />
                    <br />
                    <label>Description: </label>
                    <textarea name='description' value={this.state.description}
                        onChange={this.handleInputChange} />
                    <br />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }

}

export default NewBook;