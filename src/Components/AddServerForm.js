import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class AddServerForm extends React.Component {

  constructor(){
    super();
    this.createServer = this.createServer.bind(this);
  }

  createServer(event) {

    event.preventDefault();
    this.props.addServer(this.name, this.company);
    this.props.setOpenAdd();
    this.serverForm.reset();
  }

  editServer(event){
    if (this.name.value === '') { this.name.value = this.props.server.serverName}
    event.preventDefault();
    this.props.updateServer(this.props.server.id, this.name, this.company);
    this.props.setOpenAdd();
    this.serverForm.reset();
  }

  renderEdit(){
    return (
      <form ref={(input) => this.serverForm = input} className="server-edit" onSubmit={(e) => this.editServer(e)}>

        <FormGroup controlId="formGoupInput">
          <ControlLabel>Server Name</ControlLabel>
          <FormControl  inputRef={(input) => this.name = input} type="text" placeholder={this.props.server.serverName}/>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select company</ControlLabel>
            <FormControl componentClass="select" placeholder="select" inputRef={(input) => this.company = input}>
              <option value="Monsters inc.">Monsters inc.</option>
              <option value="Company1">Company1</option>
              <option value="Company2">Company2</option>
            </FormControl>
        </FormGroup>
        <Button type="submit" bsStyle='warning'>Edit this server</Button>
        <Button type="submit">Cancel</Button>
      </form>
    )
  }

  render() {
    if (this.props.server != null){
      return this.renderEdit();
    } else{
    return (
      this.props.add &&

        <form ref={(input) => this.serverForm = input} className="server-add" onSubmit={(e) => this.createServer(e)}>

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
          <Button type="submit" bsStyle='success'>+ Add Server</Button>
          <Button type="submit">Cancel</Button>
        </form>
        );
      }
    }
}

export default AddServerForm;
