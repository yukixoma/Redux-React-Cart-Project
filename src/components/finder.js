import React, { Component } from 'react';


class Finder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            searchOption: Number,
        }
    }

    onSearchOption = (event) => {
        let searchOption = parseInt(event.target.value,10);
        this.setState({searchOption: searchOption},() => this.onSearch());
    }

    onInputSearch = (event) => {
        let searchString = event.target.value;
        this.setState({searchString: searchString},()=>this.onSearch());
    }

    onSearch = () => {
        let searchString = this.state.searchString;
        let searchOption = this.state.searchOption;
        let task = this.props.task;
        let re = new RegExp(searchString,"gi");
        let result = task.filter(e => {
            switch(searchOption) {
                case 2:
                default: 
                    return (e.taskName.match(re));
                case 1: 
                    return(e.taskName.match(re) && e.status === 1)
                case 0: 
                    return(e.taskName.match(re) && e.status === 0)
            }
        });
        if(result.length ===0) result.push({taskName: "Not found", status: 0});
        this.props.onRecieveFinder(result);
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-10">
                    <div className="input-group" >
                        <input 
                            type="text" 
                            className="form-control" 
                            value = { this.state.searchString }
                            placeholder="Search for..."
                            onChange = { this.onInputSearch }
                        />
                    </div>
                </div>
                <div>
                    <select 
                        className="custom-select"
                        onChange = { this.onSearchOption } 
                    >
                        <option value="2"> All </option>
                        <option value="1"> Active</option>
                        <option value="0"> Hide </option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Finder;
