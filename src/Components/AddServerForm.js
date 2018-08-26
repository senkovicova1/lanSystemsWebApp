import React from 'react';
import base from '../base';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class AddServerForm extends React.Component {

  constructor(props){
    super(props);

      this.state = {
          serverName : null,
          companyName  : null,
          description : null,
          serverFunction : null,
          processor : null,
          hdd : null,
        companies : {},
        modalOpen : false,
      }
      this.addServer = this.addServer.bind(this);
        console.log('aaaa');
  }
  componentDidMount(){
    this.ref = base.syncState(`companies`, {
      context: this,
      state: 'companies'
    });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref);
  }

  addServer(e){
    if (this.name.value.length < 1) return;
    const ID = Date.now();
    firebase.database()
            .ref(`servers/${ID}`)
            .set({
              id: ID,
              serverName : this.name.value,
              companyName : this.company.value,
              description: this.description.value,
              serverFunction: this.serverFunction.value,
              processor: this.processor.value,
              hdd: this.hdd.value,
            });
  }


  render() {
    return (
       <Form ref={(input) => this.serverForm = input} className="serverAdd" onSubmit={(e) => this.addServer(e)}>

          <FormGroup controlId="formGoupInputName">
              <ControlLabel>Server Name</ControlLabel>
              <FormControl  inputRef={(input) => this.name = input} type="text" placeholder="Enter Server Name"/>
          </FormGroup>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select company</ControlLabel>
              <FormControl componentClass="select" placeholder="select" inputRef={(input) => this.company}>
                {
                  Object.keys(this.state.companies)
                        .map(c => <option key={c} value={this.state.companies[c].companyName}> {this.state.companies[c].companyName} </option> )
                }
              </FormControl>
          </FormGroup>

          <FormGroup controlId="formGoupInputFunction">
            <ControlLabel>Function</ControlLabel>
            <FormControl  inputRef={(input) => this.serverFunction } type="text" placeholder="Enter Server Function"/>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Popis</ControlLabel>
            <FormControl inputRef={(input) => this.description } componentClass="textarea" placeholder="Enter description of this server" />
          </FormGroup>

          <FormGroup controlId="formGoupInputProcessor">
            <ControlLabel>Processor</ControlLabel>
            <FormControl  inputRef={(input) => this.processor } type="text" placeholder="Enter Processor"/>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>HDD</ControlLabel>
            <FormControl inputRef={(input) => this.hdd } componentClass="textarea" placeholder="Enter HDD" />
          </FormGroup>

          <Link to={{pathname : '/servers'}}>
            <Button type="submit" onClick={() => this.addServer()} bsStyle='success' >+ Add Server</Button>
          </Link>
        </Form>
        );
    }
}
