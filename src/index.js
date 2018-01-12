import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Store 
import { createStore } from "redux";
import appReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
    appReducer
);


ReactDOM.render(
    <Provider store = { store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();
