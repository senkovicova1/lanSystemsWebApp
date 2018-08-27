import React from "react";
import firebase from 'firebase';
import Autosuggest from 'react-bootstrap-autosuggest'
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class EditTasksModalForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      users : [],
      chosenBy : null,
      chosenSolves : null,
      chosenStatus : null,
    }

    this.onOpenModal.bind(this);
    this.onCloseModal.bind(this);
    this.editTasks.bind(this);

    this.handleChangeBy.bind(this);
    this.handleChangeSolves.bind(this);
    this.handleChangeStatus.bind(this);
    this.handleDelete.bind(this);
  }

  componentDidMount(){
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

  onOpenModal = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  };

  onCloseModal = (e) => {
    e.preventDefault();
    this.setState({ open: false });
  };

  editTasks(e){
    e.preventDefault();

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

        handleDelete(e){
          e.preventDefault();
          firebase.database()
                  .ref(`tasks/${this.props.info.id}`)
                  .remove();
          this.onCloseModal(e);
        }

  render() {
    return (
      <div>
        <Button bsSize='small' bsStyle='warning' onClick={this.onOpenModal.bind(this)}>Edit</Button>

        <Button bsSize='small' bsStyle='danger' onClick={this.handleDelete.bind(this)}>Remove</Button>

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
                <FormControl  inputRef={(input) => this.title = input} type="text" placeholder={this.props.info.title}/>
            </FormGroup>

            <FormGroup controlId="formGoupInputIPAddress">
                <ControlLabel>Description</ControlLabel>
                <FormControl  inputRef={(input) => this.description = input} componentClass="textarea" placeholder={this.props.info.description} />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select status</ControlLabel>
                <Autosuggest
                  datalist={['NEW', 'In progress', 'Solved', 'On hold']}
                  placeholder={this.state.chosenStatus || this.props.info.status}
                  onChange={this.handleChangeStatus.bind(this)}
                  />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Made by</ControlLabel>
                <Autosuggest
                  datalist={Object.values(this.state.users).map(r => r.name)}
                  placeholder={this.state.chosenBy || this.props.info.by}
                  onChange={this.handleChangeBy.bind(this)}
                  />
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Soled by</ControlLabel>
                <Autosuggest
                  datalist={Object.values(this.state.users).map(r => r.name)}
                  placeholder={this.state.chosenSolves || this.props.info.solves}
                  onChange={this.handleChangeSolves.bind(this)}
                  />
            </FormGroup>

            <Button bsStyle='warning' onClick={this.editTasks.bind(this)}>Edit Task</Button>

            <Button onClick={this.onCloseModal.bind(this)}>Close</Button>

        </Modal>
      </div>
    );
  }

}
