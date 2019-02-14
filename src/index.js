import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//react-redux 和 react-router 同时使用
import Root from './components/Root'

/////////////// create redux state //////////////////
import { createStore } from 'redux';
import rootReducer from './reducers';

let initialStore = {};
const store = createStore(
    rootReducer, 
    initialStore, 
    // for redux devtools:
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/////////////// create redux state //////////////////

ReactDOM.render(<Root store={ store } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

