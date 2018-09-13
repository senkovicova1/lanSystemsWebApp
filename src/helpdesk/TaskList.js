import React, { Component } from 'react';
import base from '../firebase';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import {Button, Badge, Modal} from 'react-bootstrap';
import StatusAdd from './StatusAdd';
import TaskAdd from './TaskAdd';

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
      <Button bsStyle="success" onClick={()=>this.setState({openAddTaskModal:true})} style={{marginLeft:10}}>
        Add task
      </Button>
      <div style={{padding:15}}>
        {[{id:'all',title:'All'}].concat(this.state.statuses).map((item)=>
          <Badge key={item.id} className="statusStyle" style={{backgroundColor:this.state.status===item.id?'#337ab7':'#8db9df'}}
            onClick={()=>{
              this.setState({status:item.id});
              base.removeBinding(this.ref2);
              if(item.id==='all'){
                this.ref2 = base.bindToState(`hd-tasks`, {
                  context: this,
                  state: 'tasks',
                  asArray: true
                });
              }else{
                this.ref2 = base.bindToState(`hd-tasks`, {
                  context: this,
                  state: 'tasks',
                  asArray: true,
                  queries: {
                    orderByChild: 'status',
                    equalTo: item.id
                  }
                });
              }
            }
          }>
          {item.title}
        </Badge>)}
        <Badge className="statusStyle" style={{backgroundColor:'#8db9df'}}
          onClick={()=>this.setState({openAddStatusModal:true})}>
        Add Status
      </Badge>
      </div>
        <ReactTable
          data={data}
          columns={tableSetting}
          className="-striped -highlight"
          />
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
