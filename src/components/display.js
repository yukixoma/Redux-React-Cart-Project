import React, { Component } from 'react';



class Display extends Component {
    onModHandle = (event) => {
        let taskName = event.target.value;
        this.props.onRecieveDisplay(taskName,"mod");
    }
    
    onDeleteHandle = (event) => {
        let taskName = event.target.value;
        this.props.onRecieveDisplay(taskName,"delete");
    }

    onStatusChange = (event) => {
        let taskName = event.target.value.split(",")[0];
        let status = parseInt(event.target.value.split(",")[1],10);
        this.props.onRecieveStatusChange({
            taskName: taskName,
            status: status? 0 : 1,
        });
    }

    render() {
        let table = [];;
        let task = this.props.result.length !== 0 ? this.props.result : this.props.task
        for(var i = 0 ; i < task.length; i++) {
            table.push(
                <tr key={i} style = {{display: task[i].taskName === "Not found" ? "none":"" }}>
                    <td> 
                        <div>
                            <div className="cell">
                                { task[i].taskName }
                            </div> 
                        </div>
                    </td>
                    <td className="text-center"> 
                        <button
                            className = 
                                { task[i].status? 
                                    "btn btn-outline-success status" : 
                                    "btn btn-outline-secondary status"
                                }
                            value = {task[i].taskName + "," + task[i].status }
                            onClick = { this.onStatusChange }
                        >
                            { task[i].status ? "Active":"Inactive" }
                        </button>
                    </td>
                    <td className="text-center"> 
                        <button 
                            className="btn btn-outline-warning mr-2"
                            value = { task[i].taskName + "," + task[i].status }
                            onClick = { this.onModHandle }
                        >
                            Modify
                        </button>
                        <button className="btn btn-outline-danger"
                            value = { task[i].taskName }
                            onClick = { this.onDeleteHandle }
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            )
        }
        return (
            <div>
                <div className="card display">
                    <div className="card-block card-block-display">
                        <table className="table table-hover">
                            <thead className="">
                                <tr>
                                    <th width="40%" className="text-center"> Task  </th>
                                    <th width="30%" className="text-center"> Status </th>
                                    <th width="30%" className="text-center"> Modify </th>
                                </tr>
                            </thead>
                            <tbody>
                                {table}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Display;
