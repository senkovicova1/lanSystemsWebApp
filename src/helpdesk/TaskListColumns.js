import React, { Component } from 'react';
import base from '../firebase';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import {Button, Badge, Modal, ListGroup, ListGroupItem} from 'react-bootstrap';
import StatusAdd from './StatusAdd';
import TaskAdd from './TaskAdd';
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
    const tableSetting=[
      {
        Header: 'ID',
        accessor: 'id',
      },{
        Header: 'Title',
        accessor: 'title',
      },{
        Header: 'Status',
        accessor: 'status',
        Cell : row => {
          let status=this.state.statuses.find((item)=>item.id===row.value);
          return (
            <span>{status?status.title:'Unknown status'}</span>
          )
        }
      }];
      const data =[...this.state.tasks];
      return (
        <div style={{padding:15}}>
          <div>
            <h3>Task List</h3>
          <Button bsStyle="success" onClick={()=>this.setState({openAddTaskModal:true})} style={{marginLeft:10}}>
            Add task
          </Button>
        </div>

        <div className="taskTableContentColumns">
          {this.state.statuses.map((status)=>
            (<ListGroup key={status.id}>
              <label>{status.title}</label>
              {
                this.state.tasks.filter((item)=>item.status===status.id).map((task)=><TaskListRow task={task} key={task.id} status={status} />)
              }
            </ListGroup>)
          )
          }
      </div>

        <Modal show={this.state.openAddStatusModal} onHide={()=>{this.setState({openAddStatusModal:false})}}>
          <Modal.Header closeButton>
            <Modal.Title>Add status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <StatusAdd closeModal={()=>{this.setState({openAddStatusModal:false})}} />
          </Modal.Body>
        </Modal>
        <Modal show={this.state.openAddTaskModal} onHide={()=>{this.setState({openAddTaskModal:false})}}>
          <Modal.Header closeButton>
            <Modal.Title>Add task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TaskAdd closeModal={()=>{this.setState({openAddTaskModal:false})}} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
