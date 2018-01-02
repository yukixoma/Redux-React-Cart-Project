import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './components/display';
import Maker  from './components/maker';
import Finder from './components/finder';
import Sorter from './components/sorter';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      sortOpt: 0,
      newTaskShow: false,
      result: [],
      task: [{
        taskName: "ReactJS",
        status: 1,
      },
      {
        taskName: "AngularJS",
        status: 0,
      },
      {
        taskName: "NodeJS",
        status: 0,
      },
      {
        taskName: "Express",
        status: 1,
      }]
    }
  }

  onSort = (task,sortOpt) => {
    if(this.state.result.length === 0) {
      this.setState({
        task: task,
        sortOpt: sortOpt,
      });
    } else {
      this.setState({
        result: task,
        sortOpt: sortOpt
      })
    }
  }

  onMake = (newTask,option) => {
    if(option === "new") {
      let update = this.state.task.concat(newTask);
      this.setState({task: update,},() => {
        if(this.state.result.length === 0) this.refs.sorter.onSort(this.state.sortOpt);
        else this.refs.finder.onSearch();
      })
    } else {
      let update = this.state.task.filter(e=> { return e.taskName !== newTask.taskName })
      update.push(newTask);
      this.setState({task: update},() => {
        if(this.state.result.length === 0) this.refs.sorter.onSort(this.state.sortOpt);
        else this.refs.finder.onSearch();
      });
    }
    
  }

  onNewTaskSwitch = (value) => {
    this.setState({newTaskShow: value},() => {
      if(this.state.result.length === 0) this.refs.sorter.onSort(this.state.sortOpt);
      else this.refs.finder.onSearch();
    });
  }

  onModify = (taskDescription,option) => {
    if(option === "delete") {
      let taskName = taskDescription;
      let update = this.state.task.filter(e => { return e.taskName !== taskName });
      this.setState({task: update},() => {
        if(this.state.result.length === 0) this.refs.sorter.onSort(this.state.sortOpt);
        else this.refs.finder.onSearch();
      });
    } else {
      let taskName = taskDescription.split(",")[0];
      let status = taskDescription.split(",")[1];
      this.refs.maker.onModifyHandle(taskName,status);
    }
  }

  onStatusChange = (newTask) => {
    this.onMake(newTask,"statusUpdate");
  }
  
  onFind = (result) => {
    this.setState({result: result},()=>{this.refs.sorter.onSort(this.state.sortOpt)});
  }

  render() {
    return (
      <div>
        <div>
          <header className="App-header text-center">
            <img src={logo} className="App-logo" alt="logo" /> 
            <h1 className="App-title "> Simple Manager App </h1> 
          </header>
        </div>
        <div className="container">
          <div className="row" style={{marginTop:100}}>
            <div className="col-lg-2" >
                <div style={{display: this.state.newTaskShow? "none":"" }}>
                  <Maker
                    ref = "maker"
                    newTaskShow = {this.state.newTaskShow}
                    onRecieveMaker = { this.onMake }
                    onRecieveNewTaskSwitch = { this.onNewTaskSwitch }
                  />
                </div>
            </div>
            <div className="col-lg-8">
              <div className="col-lg-10 offset-lg-2" >
                <Finder 
                  ref = "finder"
                  task = { this.state.task }
                  onRecieveFinder = { this.onFind }
                />
              </div>
            </div>
            <div className="col-lg-2">
              <Sorter
                ref  = "sorter"
                task = { this.state.task }
                result = { this.state.result }
                onRecieveSorter = { this.onSort }
              />
            </div>
          </div>
          <div style={{marginTop:50}}>
          </div>
          <div className="row">
            <div className="col-lg-4" style={{display: this.state.newTaskShow? "":"none" }}>
              <Maker
                ref = "maker"
                newTaskShow = {this.state.newTaskShow}
                onRecieveMaker = { this.onMake }
                onRecieveNewTaskSwitch = { this.onNewTaskSwitch }
            />
            </div>
            <div className={this.state.newTaskShow? "col-lg-8": "col-lg-12"}>
              <Display
                find = { this.state.find }
                task = { this.state.task }
                result = { this.state.result }
                onRecieveDisplay = { this.onModify }
                onRecieveStatusChange = { this.onStatusChange }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
