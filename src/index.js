import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//start feelingsReducer
const feelingsReducer = (state = [], action) => {
    if (action.type === 'GET_FEELINGS') {
        return action.payload
    } else if (action.type === 'RESET_FEEDBACK') {
        return state = [];
    }
    return state;
}//end feelingsReducer

//start understandingReducer
const understandingReducer = (state = [], action) => {
    if (action.type === 'GET_UNDERSTANDING') {
        return action.payload
    } else if (action.type === 'RESET_FEEDBACK') {
        return state = [];
    }
    return state;
}//end understandingReducer

//start supportReducer
const supportReducer = (state = [], action) => {
    if (action.type === 'GET_SUPPORT') {
        return action.payload
    } else if (action.type === 'RESET_FEEDBACK') {
        return state = [];
    }
    return state;
}//end supportReducer

//start commentsReducer
const commentsReducer = (state = [], action) => {
    if (action.type === 'GET_COMMENTS') {
        return action.payload
    } else if (action.type === 'RESET_FEEDBACK') {
        return state = [];
    }
    return state;
}//commentsReducer

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger),
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();