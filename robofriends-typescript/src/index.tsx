import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'tachyons';

ReactDOM.render(
  <App />,
  // This syntax is called a type assertion, sometimes also called a cast.
  // This is a useful way of telling TypeScript what the real type of an
  // expression is when you know better than the type checker.
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
