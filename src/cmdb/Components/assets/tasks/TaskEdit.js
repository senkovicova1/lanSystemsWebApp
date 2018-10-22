import React, { Component } from "react";
import firebase from 'firebase';
import AutoSuggest from 'react-bootstrap-autosuggest';
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
              title : this.state.title,
              description : this.state.description,
              status : this.state.status,
              by : this.state.by,
              solves : this.state.solves,
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

        <div >
          <div className="content">
            <div className="container-fluid">
              <div className='taskEdit'>
              <div className='card-box'>

                <h4 class="page-title m-b-20">Information about Task</h4>

                  <div className='form-group row'>
                    <ControlLabel className='col-2 col-form-label'>Title</ControlLabel>
                    <div className='col-10' >
                        <FormControl  inputRef={(input) => this.title = input} placeholder="Enter task's name" type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })}/>
                        </div>
                      </div>

                      <div className='form-group row'>
                        <ControlLabel className='col-2 col-form-label'>Description</ControlLabel>
                        <div className='col-10' >
                        <FormControl  inputRef={(input) => this.description = input} componentClass="textarea" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
                        </div>
                      </div>

                      <div className='form-group row'>
                        <ControlLabel className='col-2 col-form-label'>Select status</ControlLabel>
                        <div className='col-10' >
                        <AutoSuggest
                          datalist={STATUS_OPTIONS}
                          value={this.state.chosenStatus}
                          onChange={(value) => this.setAny('chosenStatus', value)}
                          />
                        </div>
                      </div>

                      <div className='form-group row'>
                        <ControlLabel className='col-2 col-form-label'>Made by</ControlLabel>
                        <div className='col-10' >
                        <AutoSuggest
                          datalist={USERS_OPTIONS}
                          value={this.state.chosenBy}
                          onChange={(value) => this.setAny('chosenBy', value)}
                          />
                        </div>
                      </div>

                      <div className='form-group row'>
                        <ControlLabel className='col-2 col-form-label'>Solved by</ControlLabel>
                        <div className='col-10' >
                        <AutoSuggest
                          datalist={USERS_OPTIONS}
                          value={this.state.chosenSolves}
                          onChange={(value) => this.setAny('chosenSolves', value)}
                          />
                        </div>
                      </div>

                      <div className='form-group row'>
                        <div className="col-2.5">
                            <Button bsStyle='warning' bsSize='small' onClick={this.editTasks.bind(this)}>Edit Task</Button>
                        </div>
                          <div className="col-2">
                              <Button bsSize='small' bsStyle='danger' onClick={this.handleDelete.bind(this)}>Remove</Button>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

}
