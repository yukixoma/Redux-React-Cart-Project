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

    render() {
        let table = [];;
        let task = this.props.result.length !== 0 ? this.props.result: this.props.task
        for(var i = 0 ; i < task.length; i++) {
            table.push(
                <tr key={i} style = {{display: task[i].taskName === "Not found" ? "none":"" }}>
                    <th scope="row"> { i +1 } </th>
                    <td> { task[i].taskName } </td>
                    <td> { task[i].status ? "Active" : "Hide"} </td>
                    <td > 
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
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th> Sort </th>
                            <th className="text-center"> Task Manager </th>
                            <th className="text-center"> Status </th>
                            <th className="text-center"> Modify </th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Display;
