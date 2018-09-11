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
      title: this.props.info.title,
      description: this.props.info.description,
      chosenBy : this.props.info.by,
      chosenSolves : this.props.info.solves,
      chosenStatus : this.props.info.status,
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

componentWillReceiveProps(props){
  console.log(props);
  if (props.info.id !== this.props.info.id){
    this.setState({
      title: props.info.title,
      description: props.info.description,
      chosenBy : props.info.by,
      chosenSolves : props.info.solves,
      chosenStatus : props.info.status,
    })
  }
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
                <FormControl  inputRef={(input) => this.title = input} placeholder="Enter task's name" type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })}/>
            </FormGroup>

            <FormGroup controlId="formGoupInputIPAddress">
                <ControlLabel>Description</ControlLabel>
                <FormControl  inputRef={(input) => this.description = input} componentClass="textarea" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select status</ControlLabel>
                <AutoSuggest
                  datalist={STATUS_OPTIONS}
                  value={this.state.chosenStatus}
                  onChange={(value) => this.setAny('chosenStatus', value)}
                  />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Made by</ControlLabel>
                <AutoSuggest
                  datalist={USERS_OPTIONS}
                  value={this.state.chosenBy}
                  onChange={(value) => this.setAny('chosenBy', value)}
                  />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Solved by</ControlLabel>
                <AutoSuggest
                  datalist={USERS_OPTIONS}
                  value={this.state.chosenSolves}
                  onChange={(value) => this.setAny('chosenSolves', value)}
                  />
            </FormGroup>

            <Button bsStyle='warning' bsSize='small' onClick={this.editTasks.bind(this)}>Edit Task</Button>
            <Button bsSize='small' bsStyle='danger' onClick={this.handleDelete.bind(this)}>Remove</Button>

      </div>
    );
  }

}
