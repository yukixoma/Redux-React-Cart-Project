import React, { Component } from 'react';
import './css/display.css';

class Display extends Component {
    render() {
      return (
        <div className="jumbotron text-center" 
          style = {{color: this.props.color, fontSize: this.props.size}}>
            Hi, I'm text display
            
            <p style={{fontSize: 20, marginTop:50, marginBottom: 0}}>Color-hex: {this.props.color}</p>
        </div>
      );
    }
  }
  
  export default Display;