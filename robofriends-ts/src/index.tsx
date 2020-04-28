import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // This syntax is called a type assertion, sometimes also called a cast.
  // This is a useful way of telling TypeScript what the real type of an
  // expression is when you know better than the type checker.
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
