import React from 'react';
import base from '../base';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class EditServerForm extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        server : 0,
        companies: {},
        chosenCompany: null,
      }
      this.editServer = this.editServer.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    const SERVER_ID = this.props.match.params.id;
    const DB = firebase.database().ref(`servers/${SERVER_ID}`);
    DB.on('value', snap =>
        this.setState({
          server : snap.val()
        })
      );

    this.ref = base.syncState(`companies`, {
      context: this,
      state: 'companies'
    });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref);
  }

  editServer(event){
    firebase.database()
            .ref(`servers/${this.state.server.id}`)
            .update({
              serverName : this.name.value || this.state.server.serverName,
              companyName : this.company.value || this.state.server.companyName,
              description: this.description.value || this.state.server.description,
              serverFunction: this.serverFunction.value || this.state.server.serverFunction,
              processor: this.processor.value || this.state.server.processor,
              hdd: this.hdd.value || this.state.server.hdd,
            });
  }

  handleChange(event) {
      this.setState({
        chosenCompany: event.target.value
      });
    }

  render() {
    return (
          <form ref={(input) => this.serverForm = input} className="serverEdit" onSubmit={(e) => this.editServer(e)} >

            <FormGroup controlId="formGoupInput">
              <ControlLabel>Server Name</ControlLabel>
              <FormControl  inputRef={(input) => this.name = input} type="text" placeholder={this.state.server.serverName}/>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select company</ControlLabel>
                <FormControl value={this.state.chosenCompany || this.state.server.companyName} onChange={this.handleChange} componentClass="select" placeholder="select" inputRef={(input) => this.company = input}>
                {
                  Object.keys(this.state.companies)
                        .map(c => <option key={c} value={this.state.companies[c].companyName}> {this.state.companies[c].companyName} </option> )
                }
                </FormControl>
            </FormGroup>

            <FormGroup controlId="formGoupInputFunction">
              <ControlLabel>Function</ControlLabel>
              <FormControl  inputRef={(input) => this.serverFunction = input} type="text" placeholder={this.state.server.serverFunction}/>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Popis</ControlLabel>
              <FormControl inputRef={(input) => this.description = input} componentClass="textarea" placeholder={this.state.server.description} />
            </FormGroup>

            <FormGroup controlId="formGoupInputProcessor">
              <ControlLabel>Processor</ControlLabel>
              <FormControl  inputRef={(input) => this.processor = input} type="text" placeholder={this.state.server.processor}/>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>HDD</ControlLabel>
              <FormControl inputRef={(input) => this.hdd = input} componentClass="textarea" placeholder={this.state.server.hdd} />
            </FormGroup>

            <Link to={{ pathname: '/servers'}}>
              <Button type="submit" onClick={(e) => this.editServer(e)} bsStyle='warning'>Edit this server</Button>
            </Link>
          </form>
        );
  }
}

export default EditServerForm;
