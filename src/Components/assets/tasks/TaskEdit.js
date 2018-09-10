import React, { Component } from "react";
import firebase from 'firebase';
import AutoSuggest from 'react-bootstrap-autosuggest';
import Modal from 'react-responsive-modal';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const STATUS_OPTIONS = ['NEW', 'In progress', 'Solved', 'On hold'];

export default class TasksEdit extends Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      users : [],
      chosenBy : null,
      chosenSolves : null,
      chosenStatus : null,
    }

    this.setAny.bind(this);

    this.editTasks.bind(this);
    this.handleDelete.bind(this);

    const USERS = firebase.database().ref(`users`);
    USERS.once('value')
          .then(snap =>
            {
              this.setState({
              users : {...snap.val()},
              });
            }
          );
  }

  setAny(key, value){
    let newState={};
    newState[key]=value;
    this.setState(newState);
  }

  editTasks(){
    firebase.database()
            .ref(`tasks/${this.props.info.id}`)
            .set({
              id : this.props.info.id,
              title : this.title.value || this.props.info.title,
              description : this.description.value  || this.props.info.description,
              status : this.state.chosenStatus || this.props.info.status,
              by : this.state.chosenBy || this.props.info.by,
              solves : this.state.chosenSolves || this.props.info.solves,
            });

  }

  handleDelete(){
    firebase.database()
            .ref(`tasks/${this.props.info.id}`)
            .remove();
  }

  render() {
    if (this.props.info === null){
      return (<p className="taskEditNoTask">No task was chosen yet.</p>);
    }
    const USERS_OPTIONS = Object.values(this.state.users).map(r => r.name);
    return (
      <div className='taskEdit'>

          <h2>Information about Task</h2>

            <FormGroup controlId="formGoupInputTasks">
                <ControlLabel>Title</ControlLabel>
                <FormControl  inputRef={(input) => this.title = input} type="text" placeholder={this.props.info.title}/>
            </FormGroup>

            <FormGroup controlId="formGoupInputIPAddress">
                <ControlLabel>Description</ControlLabel>
                <FormControl  inputRef={(input) => this.description = input} componentClass="textarea" placeholder={this.props.info.description} />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select status</ControlLabel>
                <AutoSuggest
                  datalist={STATUS_OPTIONS}
                  placeholder={this.state.chosenStatus || this.props.info.status}
                  onChange={(value) => this.setAny('chosenStatus', value)}
                  />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Made by</ControlLabel>
                <AutoSuggest
                  datalist={USERS_OPTIONS}
                  placeholder={this.state.chosenBy || this.props.info.by}
                  onChange={(value) => this.setAny('chosenBy', value)}
                  />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Soled by</ControlLabel>
                <AutoSuggest
                  datalist={USERS_OPTIONS}
                  placeholder={this.state.chosenSolves || this.props.info.solves}
                  onChange={(value) => this.setAny('chosenSolves', value)}
                  />
            </FormGroup>

            <Button bsStyle='warning' bsSize='small' onClick={this.editTasks.bind(this)}>Edit Task</Button>
            <Button bsSize='small' bsStyle='danger' onClick={this.handleDelete.bind(this)}>Remove</Button>

      </div>
    );
  }

}