import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title "> Simple Manager App </h1> 
        </header>
      </div>
    );
  }
}

export default App;
