import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class AddServerForm extends React.Component {

  constructor(props){
    super(props);

      this.state = {
        server : 0,
      }
      this.assServer = this.addServer.bind(this);
  }

  addServer(e){
    const ID = Date.now();
    firebase.database()
            .ref(`servers/server${ID}`)
            .set({
              id: ID,
              serverName : this.name.value,
              companyName : this.company.value,
            });
  }

  render() {
    return (

        <form ref={(input) => this.serverForm = input} className="server-add" onSubmit={(e) => this.addServer(e)}>

          <FormGroup controlId="formGoupInput">
            <ControlLabel>Server Name</ControlLabel>
            <FormControl  inputRef={(input) => this.name = input} type="text" placeholder="Enter Server Name"/>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select company</ControlLabel>
              <FormControl componentClass="select" placeholder="select" inputRef={(input) => this.company = input}>
                <option value="Monsters inc.">Monsters inc.</option>
                <option value="Company1">Company1</option>
                <option value="Company2">Company2</option>
              </FormControl>
          </FormGroup>
          <Link to={{pathname : '/servers'}}>
            <Button type="submit" onClick={() => this.addServer()} bsStyle='success' >+ Add Server</Button>
          </Link>
        </form>
        );
    }
}

export default AddServerForm;
