import React, { Component } from 'react';

class Reset extends Component {
    onReset = () => {
      this.props.onReceiveReset();
    }
    render() {
      
      return (
        <div>
            <button className="btn btn-danger" onClick = { () => this.onReset() }> 
            Reset 
            </button>
        </div>
      );
    }
  }
  
  export default Reset;
  