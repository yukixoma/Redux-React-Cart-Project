import React, { Component } from 'react';
import logo from './logo.svg';
import Color from './components/color';
import Size from './components/size';
import Display from './components/display';
import Reset from './components/reset';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#000000",
      size: 50,
    }
  }

  onSetColor = (color) => {
    this.setState({ color: color});
  }

  onSetSize = (size) => {
    this.setState({size: size});
  }

  onReset = () => {
    this.setState({
      color: "#000000",
      size: 50,
    })
  }
  render() {
    return (
      <div>
        <header className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title ">Welcome to React</h1> 
        </header>
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Color
                color           = { this.state.color } 
                onReceiveColor  = { this.onSetColor }
              />
            </div>
            <div className="col-lg-6">
              <Size 
                size          = { this.state.size }
                onReceiveSize = { this.onSetSize }
              />
            </div>
          </div>
          <br/>
          <div>
            <Display 
              color = { this.state.color }
              size  = { this.state.size } 
            />
          </div>
          <div className="text-center">
            <Reset onReceiveReset = { this.onReset }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
