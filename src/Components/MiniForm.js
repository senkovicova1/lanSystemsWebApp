import React from "react";
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class MiniForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
    }

    this.onOpenModal.bind(this);
    this.onCloseModal.bind(this);
    this.addNIC.bind(this);
  }

  onOpenModal = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  };

  onCloseModal = (e) => {
    e.preventDefault();
    this.setState({ open: false });
  };

  addNIC(e){
    e.preventDefault();
    const ID = Date.now();
    firebase.database()
            .ref(`nics/${ID}`)
            .set({
              id : ID,
              serverID : this.props.serverId,
              nic : this.nic.value,
              IPaddress : this.IPaddress.value,
              mask : this.mask.value,
              gateway : this.gateway.value,
              dns1 : this.dns1.value,
              dns2 : this.dns2.value,
              mac : this.mac.value,
              dhcp : this.dhcp.value,
            });

    this.onCloseModal(e);
  }

  render() {
    return (
      <div>
        <Button bsSize="small" bsStyle='success' onClick={this.onOpenModal.bind(this)}>Add NIC</Button>
        <Modal
          open={this.state.open}
          onClose={() => {}}
          center
          closeOnEsc
          closeOnOverlayClick
          >
          <h2>Information about NIC</h2>

            <FormGroup controlId="formGoupInputNIC">
                <ControlLabel>NIC</ControlLabel>
                <FormControl  inputRef={(input) => this.nic = input} type="text" placeholder="Enter NIC"/>
            </FormGroup>

            <FormGroup controlId="formGoupInputIPAddress">
                <ControlLabel>IP address</ControlLabel>
                <FormControl  inputRef={(input) => this.IPaddress = input} type="text" placeholder="Enter IP address"/>
            </FormGroup>

            <FormGroup controlId="formGoupInputMask">
                <ControlLabel>Mask</ControlLabel>
                <FormControl  inputRef={(input) => this.mask = input} type="text" placeholder="Enter Mask"/>
            </FormGroup>

            <FormGroup controlId="formGoupInputGateway">
                <ControlLabel>Gateway</ControlLabel>
                <FormControl  inputRef={(input) => this.gateway = input} type="text" placeholder="Enter Gateway"/>
            </FormGroup>

            <FormGroup controlId="formGoupInputDNS1">
                <ControlLabel>DNS1</ControlLabel>
                <FormControl  inputRef={(input) => this.dns1 = input} type="text" placeholder="Enter DNS1"/>
            </FormGroup>

            <FormGroup controlId="formGoupInputDNS2">
                <ControlLabel>DNS2</ControlLabel>
                <FormControl  inputRef={(input) => this.dns2 = input} type="text" placeholder="Enter DNS2"/>
            </FormGroup>

            <FormGroup controlId="formGoupInputMAC">
                <ControlLabel>MAC</ControlLabel>
                <FormControl  inputRef={(input) => this.mac = input} type="text" placeholder="Enter MAC"/>
            </FormGroup>

            <FormGroup controlId="formGoupInputDHCP">
                <ControlLabel>DHCP</ControlLabel>
                <FormControl  inputRef={(input) => this.dhcp = input} type="text" placeholder="Enter DHCP"/>
            </FormGroup>


            <Button bsSize='large' bsStyle='success' onClick={this.addNIC.bind(this)}>+ Add NIC</Button>

            <Button onClick={this.onCloseModal.bind(this)}>Close</Button>

        </Modal>
      </div>
    );
  }

}
