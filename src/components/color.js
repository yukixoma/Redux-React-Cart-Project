import React, { Component } from 'react';
import './css/color.css';
class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ["#d9534f","#5bc0de","#FF8800","#5cb85c","#9933CC"],
            active:"#000000"
        }
    }
    onSetColor = (color) => {
        this.props.onReceiveColor(color);
        this.setState({active: color});
    }

    onEnter = (color) => {
        this.props.onReceiveColor(color);
    }

    onLeave = (color) => {
        this.props.onReceiveColor(this.state.active);
    }

    onReset = () => {
        this.setState({active: "#000000"});
        console.log("reset");
    }

    render() {
        if(this.props.color === "#000000" && this.state.active !== "#000000") {
            this.onReset();
        }
        var colorButton = this.state.colors.map( (color,index) => {
            return (
                <button key={index} 
                    className={this.props.color === color ? "btn mr-sm-2 active": "btn mr-sm-2"}
                        style={{backgroundColor: color,}}
                            onClick={ () => this.onSetColor(color) }
                            onMouseEnter={ () => this.onEnter(color) }
                            onMouseLeave= {() => this.onLeave(color) }> 
                </button>
            )
        })
        return (
            <div className="card">
                <h3 className="card-header">Color Picker</h3>
                <div className="card-block">
                    <div className="text-center">
                        {colorButton}
                    </div>
                </div>
            </div>
      );
    }
  }
  
  export default Color;