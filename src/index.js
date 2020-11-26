import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calc from './Calc';
import TodoApp from './todoApp';
import App2 from './container/students'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('simpleform')

);

ReactDOM.render(
  <React.StrictMode>
    <Calc />
  </React.StrictMode>,
  document.getElementById('calc')
  
);



ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('todoApp')
  
);

ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('app2')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
