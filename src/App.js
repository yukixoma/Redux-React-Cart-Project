import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/display';




class App extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="App-header text-center">
            <img src={logo} className="App-logo" alt="logo" /> 
            <h1 className="App-title "> Simple Manager App </h1> 
          </header>
        </div>
        <div className="container">
          <Display/>
        </div>
      </div>
    );
  }
}

export default App;
