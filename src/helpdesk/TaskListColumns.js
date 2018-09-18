import React, { Component } from 'react';
import base from '../firebase';
import { ListGroup, Glyphicon } from 'react-bootstrap';
import TaskListRow from './TaskListRow';

export default class TaskList extends Component{

  constructor(props){
    super(props);
    this.state = {
      tasks:[],
      statuses:[],
      status:'all',
      openAddStatusModal:false,
      openAddTaskModal:false,
    }
  }

  componentWillMount(){
    this.ref = base.bindToState(`hd-statuses`, {
      context: this,
      state: 'statuses',
      asArray: true
    });
    this.ref2 = base.bindToState(`hd-tasks`, {
      context: this,
      state: 'tasks',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    base.removeBinding(this.ref2);
  }

  render(){
      return (
        <div style={{padding:15}}>

        <div className="taskTableContentColumns">
          {this.state.statuses.map((status)=>
            (<ListGroup key={status.id}>
              <label>{status.title}
                <Glyphicon style={{marginLeft:5}}
                  glyph="remove-sign"
                  onClick={()=>{
                    if (window.confirm("Are you sure you want to delete status "+ status.title+"?")) {
                      base.remove(`hd-statuses/`+status.id);
                    } else {
                      return;
                    }
                  }
                }
                /></label>
              {
                this.state.tasks.filter((item)=>item.status===status.id).map((task)=><TaskListRow task={task} key={task.id} status={status} />)
              }
            </ListGroup>)
          )
          }
      </div>
      </div>
    );
  }
}
