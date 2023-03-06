import '../stylesheets/style.css'
import React, { Component } from 'react';

// Functional component
// function Person() {
//     // Using JSX
//     // return (
//     //   <div>
//     //     <h1>I'm person component</h1>
//     //   </div>
//     // );

//     //Using React
//     return React.createElement('div', null, React.createElement('h1', null, "I'm person component"));
// }

// Class component
class Person extends Component {
    state = {
        books: [
            { bookName: '1984', writer: 'George Parwell' },
        ]
    };
    // constructor(props) {
    //     super(props);
    // }
    render() {
        // let obj = new Component();
        // console.log(this.props);
        // Raw CSS is not applicable.
        // Need to use javascript object instead.
        const style = {
            margin: 'auto',
            backgroundColor: 'aquamarine',
            marginBottom: '10px'
        };
        return (
            <div style={style} className='person'>
                <input type="text" onChange={this.props.change} />
                <h3 onClick={this.props.change}>Book Name: {this.props.bookName}</h3>
                <h3>Writer: {this.props.writer}</h3>
            </div>
        );
    }
}
// export let Person2 = (props) => {
//     // console.log(props);
//     return React.createElement('div', null,
//         React.createElement('h1', null,
//             `Name: ${props.name}, 
//             Age: ${props.age} years and
//             ${props.children}`));
// }

export default Person;