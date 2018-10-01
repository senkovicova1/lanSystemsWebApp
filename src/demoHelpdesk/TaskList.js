import React, { Component } from 'react';
import {Button, Modal, Badge, InputGroup, Glyphicon, FormControl} from 'react-bootstrap';


export default class TaskListContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      openAddStatusModal:false,
      openAddTaskModal:false,
      isColumn:false,
      search:'',
    }
  }
  render(){
      return (
        <div>
         <h1>TaskList demo</h1>
      </div>
    );
  }
}
