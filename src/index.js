import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const feedbackReducer = (state=[], action) => {
    
}



// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
  
    }),
    applyMiddleware(logger),
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));