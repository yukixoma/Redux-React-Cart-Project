import React, { Component } from 'react';
import './css/size.css';

;

class Size extends Component {
    onChangeSize = (currentSize,changeVal) => {
        if(currentSize <= 30 && changeVal < 0 ) return this.props.onReceiveSize(currentSize);
        if(currentSize >= 100 && changeVal > 0 ) return this.props.onReceiveSize(currentSize);
        this.props.onReceiveSize(currentSize + changeVal);
    }

    render() {
        let currentSize = this.props.size;
        return (
            <div className="card card-size">
                <h3 className="card-header size">Size Adjust</h3>
                <div className="card-block">
                    <div className="text-center">
                        <button className="btn btn-danger mr-sm-2" 
                            onClick = { () => this.onChangeSize(currentSize,-2) }> 
                                Down 
                        </button>
                        <button className="btn btn-success mr-sm-2"
                            onClick = { () => this.onChangeSize(currentSize,+2) }> 
                                Up 
                        </button>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Size;