import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
// import { person } from './App.js';
import reportWebVitals from './reportWebVitals';

const root1 = ReactDOM.createRoot(document.getElementById('root'));
// const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root1.render(
  // <React.StrictMode>
    <App />
    /* <person /> */
  // </React.StrictMode>
);
// root2.render(
//   <React.StrictMode>
//     <h3 align="center">Hi World!!</h3>
//     <person />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
