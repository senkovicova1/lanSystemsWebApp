import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class EditServerForm extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        server : 0,
      }
      this.editServer = this.editServer.bind(this);

  }

  componentDidMount(){
    const SERVER_ID = this.props.match.params.id;
    const DB = firebase.database().ref(`servers/server${SERVER_ID}`);
    DB.on('value', snap =>
        this.setState({ server : snap.val() })
      );
  }

  editServer(event){
    firebase.database()
            .ref(`servers/server${this.state.server.id}`)
            .update({
              serverName : this.name.value,
              companyName : this.company.value,
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
                <FormControl componentClass="select" placeholder="select" inputRef={(input) => this.company = input}>
                  <option value="Monsters inc.">Monsters inc.</option>
                  <option value="Company1">Company1</option>
                  <option value="Company2">Company2</option>
                </FormControl>
            </FormGroup>
            <Link to={{ pathname: '/servers'}}>
              <Button type="submit" bsStyle='warning'>Edit this server</Button>
            </Link>
          </form>
        );
  }
}

export default EditServerForm;
