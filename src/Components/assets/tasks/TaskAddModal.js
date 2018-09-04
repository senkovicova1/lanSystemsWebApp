import React from "react";
import firebase from 'firebase';
import AutoSuggest from 'react-bootstrap-autosuggest';
import Modal from 'react-responsive-modal';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const STATUS_OPTIONS = ['NEW', 'In progress', 'Solved', 'On hold'];

export default class TasksAddModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      users : [],
    }

    this.setModalOpen.bind(this);
    this.addTasks.bind(this);

    this.setAny.bind(this);


    const USERS = firebase.database().ref(`users`);
    USERS.once('value')
          .then(snap =>
            {
              this.setState({
              users : snap.val(),
              });
            }
          );
  }

  setModalOpen = (open) => {
    this.setState({ open });
  };

  setAny(key, value){
    let newState={};
    newState[key]=value;
    this.setState(newState);
  }

  addTasks(){
    const ID = Date.now();
    firebase.database()
            .ref(`tasks/${ID}`)
            .set({
              id : ID,
              title : this.title.value || "",
              description : this.description.value || "",
              status : this.state.chosenStatus || "",
              by : this.state.chosenBy || "",
              solves : this.state.chosenSolves || "",
            });

    this.setModalOpen(false);
  }

  render() {

    const USERS_OPTIONS = Object.values(this.state.users).map(r => r.name);
    return (
      <div>
        <Button bsStyle='success' onClick={() => this.setModalOpen(true)}>+ Add Task</Button>
        <Modal
          open={this.state.open}
          onClose={() => {}}
          center
          closeOnEsc
          closeOnOverlayClick
          >
          <h2>Information about Task</h2>

            <FormGroup controlId="formGoupInputTasks">
                <ControlLabel>Title</ControlLabel>
                <FormControl  inputRef={(input) => this.title = input} type="text" placeholder="Enter title"/>
            </FormGroup>

            <FormGroup controlId="formGoupInputIPAddress">
                <ControlLabel>Description</ControlLabel>
                <FormControl  inputRef={(input) => this.description = input} componentClass="textarea" placeholder='Enter task description' />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select status</ControlLabel>
                <AutoSuggest
                  datalist={STATUS_OPTIONS}
                  placeholder={this.state.chosenStatus}
                  onChange={(value) => this.setAny('chosenStatus', value)}
                  />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Made by</ControlLabel>
                <AutoSuggest
                  datalist={USERS_OPTIONS}
                  placeholder={this.state.chosenBy}
                  onChange={(value) => this.setAny('chosenBy', value)}
                  />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Solved by</ControlLabel>
                <AutoSuggest
                  datalist={USERS_OPTIONS}
                  placeholder={this.state.chosenSolves}
                  onChange={(value) => this.setAny('chosenSolves', value)}
                  />
            </FormGroup>

            <Button bsStyle='success' onClick={this.addTasks.bind(this)}>+ Add Task</Button>

            <Button onClick={() => this.setModalOpen(false)}>Close</Button>

        </Modal>
      </div>
    );
  }

}
