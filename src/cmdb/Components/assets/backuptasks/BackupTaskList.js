import React, { Component } from 'react';
import base from '../../../../firebase';
import firebase from 'firebase';
import { Button, FormGroup, ControlLabel, FormControl, Modal } from 'react-bootstrap';
import Select from 'react-select';
import BackupTaskAdd from './BackupTaskAdd';
import BackupTaskEdit from './BackupTaskEdit';

export default class BackupTaskList extends Component{

  constructor(props){
    super(props);
    this.state = {
      serverID : this.props.serverID,
      opedModal : false,
      backupTasks : [],
    };
    this.closeModal.bind(this);
  }

  closeModal(){
    this.setState({
      openModal : false,
    })
  }

  componentWillReceiveProps(props){
    if (props.serverID !== this.props.serverID){
      this.setState({
        serverID : props.serverID,
      })
    }
  }

  componentDidMount(){
    this.ref = base.bindToState(`cmdb-backup-tasks`, {
      context: this,
      state: 'backupTasks',
      asArray: true,
    });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref);
  }

  render(){
    const TASKS = this.state.backupTasks.filter(task =>
      {
        console.log('---------------------------------------');
        console.log(task.serverID);
        console.log(typeof(task.serverID));
        console.log(this.state.serverID);
        console.log(typeof(this.state.serverID));
        console.log(task.serverID === this.state.serverID);
        return task.serverID === this.state.serverID;

      });
    return (
      <div className='mainContainer'>
          <FormGroup controlId="textareaHDD">
            <ControlLabel>Backup Tasks</ControlLabel>
              <div>
              <Button bsStyle="success" bsSize='small' onClick={() => this.setState({openModal:true})}> Add a backup task </Button>
              </div>
              <Modal bsSize='large' show={this.state.openModal} onHide={()=>{this.setState({openModal:false})}}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Backup Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BackupTaskAdd serverID={this.state.serverID} closeModal={this.closeModal.bind(this)}/>
                </Modal.Body>
              </Modal>
          </FormGroup>

          <FormGroup controlId="textareaHDD">
            {TASKS.map(task =>
                <BackupTaskEdit bt={task} />
            )}
          </FormGroup>


      </div>
    );
  }
}
