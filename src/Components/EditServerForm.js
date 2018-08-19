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
    const DB = firebase.database().ref(`servers/server${SERVER_ID}`);
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
            .ref(`servers/server${this.state.server.id}`)
            .update({
              serverName : this.name.value || this.state.server.serverName,
              companyName : this.company.value,
            });
  }

  handleChange(event) {
      this.setState({
        chosenCompany: event.target.value
      });
    }

  render() {
    return (
          <form ref={(input) => this.serverForm = input} className="server-edit" onSubmit={(e) => this.editServer(e)} >

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

            <Link to={{ pathname: '/servers'}}>
              <Button type="submit" onClick={(e) => this.editServer(e)} bsStyle='warning'>Edit this server</Button>
            </Link>
          </form>
        );
  }
}

export default EditServerForm;
