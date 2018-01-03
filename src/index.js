import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Store 
import { createStore } from 'redux';
import { Provider } from "react-redux";
import myReducer from './redux/reducers/index';
const store = createStore(myReducer);






ReactDOM.render(
    <Provider store ={ store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);


registerServiceWorker();
