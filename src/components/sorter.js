import React, { Component } from 'react';


class Finder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }
    onHandleChange = (event) => {
        let sortOpt = parseInt(event.target.value,10);
        this.setState({active: sortOpt})
        this.onSort(sortOpt);
    }

    onSort = (sortOpt) => {
        let task = this.props.result.length !== 0 ? this.props.result: this.props.task;
        switch (sortOpt) {
            case 1: 
            default:
                task.sort((a,b) => {return (a.taskName > b.taskName) ? 1 : ((b.taskName > a.taskName) ? -1 : 0);});
                break;
            case 2: 
                task.sort((a,b) => {return (a.taskName < b.taskName) ? 1 : ((b.taskName < a.taskName) ? -1 : 0);});
                break;
            case 3:
                task.sort((a,b) => {
                   if(a.status === b.status) {
                       return (a.taskName < b.taskName) ? -1 : (a.taskName > b.taskName) ? 1 : 0
                   } else {
                       return (a.status > b.status) ? -1 : 1;
                   }
                });
                break;
            case 4:
                task.sort((a,b) => {
                    if(a.status === b.status) {
                        return (a.taskName < b.taskName) ? -1 : (a.taskName > b.taskName) ? 1 : 0
                    } else {
                        return (a.status < b.status) ? -1 : 1;
                    }
                });
                break;
            
        }
        this.props.onRecieveSorter(task,sortOpt);
    }

    render() { 
        return (
            <div className="text-right">
                <select className="custom-select" 
                    onChange = { this.onHandleChange }
                    value = { this.state.active }
                >
                    <option value="0"> Sort </option>
                    <option value="1"> A-Z </option>
                    <option value="2"> Z-A</option>
                    <option value="3"> Active </option>
                    <option value="4"> Hide </option>
                </select>
            </div>
        );
    }
}

export default Finder;