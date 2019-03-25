import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './Components/App';
import reducers from './reducers';

/* Using applyMiddleWare we are applying redux thunk as the middleware
 anytime we dispatch an action the action is sent to thunk and then after
 that it will be sent to all the different reducers
 
 This changes the rules of the action creators which allows us to optionally return
 a function which allows us to change or get information from the redux store
 Anytime we make a request to an API we are going to use something like Redux Thunk */

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);