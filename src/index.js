import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import reducers from './combine.js';

const createdstore = applyMiddleware(thunk)(createStore)
const store = createdstore(reducers);
ReactDOM.render(
<Provider store = {store}>

<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
