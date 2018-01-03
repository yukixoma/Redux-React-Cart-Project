import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import * as actions from '../redux/actions/index';

class Display extends Component {
    onHandleDelete = (event) => {
        let taskName = event.target.value;
        this.props.onDelete(taskName);
    }

    onHandleStatusChange = (event) => {
        let taskName =  event.target.value;
        this.props.onStatusChange(taskName);
    }    
    render() {
        console.log(this.props.tasks);
        let tasks = this.props.tasks;
        let i = 0;
        let table = tasks.map(e => {
            return (
                <tr key={++i}>
                    <td> {e.taskName} </td>
                    <td className = "text-center"> 
                        <button
                            value = {e.taskName} 
                            className="btn btn-outline-danger"
                            onClick = { this.onHandleStatusChange }
                        > 
                            {e.status ? "Active" : "Inactive"}   
                        </button>
                    </td>
                    <td className = "text-right"> 
                    <button 
                        value = {e.taskName}
                        className="btn btn-outline-danger"
                        onClick = { this.onHandleDelete }
                    > 
                        Delete 
                    </button> 
                    </td>
                </tr>   
            )
        })
        return (
            <div className="col-lg-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th className = "text-center">Status</th>
                            <th className = "text-right">Modify</th>
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
  
  const mapStatetoProps = state => {
      return {
          tasks: state.tasks
      }
  }

  const mapDispatchtoProps = (dispatch,props) => {
      return {
          onDelete: (taskName) => {
              dispatch(actions.Delete(taskName));
          },
          onStatusChange: (taskName) => {
              dispatch(actions.changeStatus(taskName));
          }
      }
  }
export default connect(mapStatetoProps,mapDispatchtoProps)(Display);