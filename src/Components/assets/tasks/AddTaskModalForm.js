import React from "react";
import firebase from 'firebase';
import Autosuggest from 'react-bootstrap-autosuggest'
import Modal from 'react-responsive-modal';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class AddTasksModalForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      users : [],
    }

    this.onOpenModal.bind(this);
    this.onCloseModal.bind(this);
    this.addTasks.bind(this);

    this.handleChangeBy.bind(this);
    this.handleChangeSolves.bind(this);
    this.handleChangeStatus.bind(this);
  }

  componentDidMount(){
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

  onOpenModal = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  };

  onCloseModal = (e) => {
    e.preventDefault();
    this.setState({ open: false });
  };

  addTasks(e){
    e.preventDefault();
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

    this.onCloseModal(e);
  }

  handleChangeBy(value) {
      this.setState({
        chosenBy: value
      });
    }

    handleChangeSolves(value) {
        this.setState({
          chosenSolves: value
        });
      }

      handleChangeStatus(value) {
          this.setState({
            chosenStatus: value
          });
        }

  render() {
    return (
      <div>
        <Button bsStyle='success' onClick={this.onOpenModal.bind(this)}>+ Add Task</Button>
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
                <Autosuggest
                  datalist={['NEW', 'In progress', 'Solved', 'On hold']}
                  placeholder={this.state.chosenStatus}
                  onChange={this.handleChangeStatus.bind(this)}
                  />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Made by</ControlLabel>
                <Autosuggest
                  datalist={Object.values(this.state.users).map(r => r.name)}
                  placeholder={this.state.chosenBy}
                  onChange={this.handleChangeBy.bind(this)}
                  />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Solved by</ControlLabel>
                <Autosuggest
                  datalist={Object.values(this.state.users).map(r => r.name)}
                  placeholder={this.state.chosenSolves}
                  onChange={this.handleChangeSolves.bind(this)}
                  />
            </FormGroup>

            <Button bsStyle='success' onClick={this.addTasks.bind(this)}>+ Add Task</Button>

            <Button onClick={this.onCloseModal.bind(this)}>Close</Button>

        </Modal>
      </div>
    );
  }

}
