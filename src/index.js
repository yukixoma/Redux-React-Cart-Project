import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './components/nav';
import Main from './components/main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('header'));
ReactDOM.render(<Nav />,document.getElementById("nav"))
ReactDOM.render(<Main/>,document.getElementById("main"));

registerServiceWorker();
