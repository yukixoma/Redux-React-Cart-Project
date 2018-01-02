import React, { Component } from 'react';


class Maker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                taskName: "",
                status: 1
            },
            mod: false
        }
    }
    onShow = () => {
        this.props.onRecieveNewTaskSwitch(true);
    }

    onClose = () => {
        this.props.onRecieveNewTaskSwitch(false);
        this.setState({
            mod: false,
            task: {
                taskName: "",
                status: 1
            }
        })
    }

    onChangeHandle = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let update = this.state.task;
        update[name] = name === "status" ? parseInt(value,10) : value;
        this.setState({task: update});
        
    }

    onSubmitHandle = (event) => {
        event.preventDefault();
        let newTask = this.state.task;
        if(this.state.mod) this.props.onRecieveMaker(newTask,"mod");
        else this.props.onRecieveMaker(newTask,"new");
        this.setState({
            mod: false,
            task: {
                taskName: "",
                status: 1
            }
        })
    }

    onModifyHandle = (taskName,status) => {
        console.log(taskName,status);
        this.props.onRecieveNewTaskSwitch(true);
        this.setState({
            mod: true,
            task: {
                taskName: taskName,
                status: status
            }
        })
        
    }

    render() {
        return (
        <div>
            <div style={{display: this.props.newTaskShow? "none": ""}}>
                <button className="btn btn-outline-primary mr-2 new-task" onClick = { this.onShow }>
                    New task
                </button>
            </div>
            <div>
                <div className="card" 
                    style={{
                        display: this.props.newTaskShow? "": "none", 
                        marginTop:10, 
                        marginBottom:10,
                        borderColor: this.state.mod? "#FF8800": "#4285F4"
                    }} 
                >
                    <div 
                        className="card-header" 
                        style={{
                            color:"white",
                            backgroundColor: this.state.mod? "#FF8800": "#4285F4"
                        }}
                    >
                        <div className="row">
                            <div className="col-6" >
                                <h3> { this.state.mod? "Modify" : "New"} </h3> 
                            </div>
                            <div className="col-6 text-right" onClick = { this.onClose }>
                                <span className="text-center">
                                    <i className="fa fa-times" aria-hidden="true" style={{fontSize:30}}>
                                    </i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-block">
                        <form onSubmit = { this.onSubmitHandle } >
                            <div className="form-group" >
                                <input 
                                    onChange = { this.onChangeHandle }
                                    value = { this.state.task.taskName }
                                    className="form-control my-2" 
                                    name="taskName" 
                                    type="text"
                                />
                                <select 
                                    value = { this.state.task.status }
                                    className="form-control my-2" 
                                    name="status"
                                    onChange = { this.onChangeHandle }>
                                        <option value="1"> Active </option>
                                        <option value="0"> Inactive </option>
                                </select>
                            </div>
                            <button 
                                className= {this.state.mod? "btn btn-outline-warning mr-2":"btn btn-outline-primary mr-2"} 
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Maker;
