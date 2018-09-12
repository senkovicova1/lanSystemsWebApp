import React, { Component } from 'react';
import base from '../firebase';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class PictureUploadModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }

    this.setModalOpen.bind(this);
    this.addPicture.bind(this);
  }

  setModalOpen = (open) => {
    this.setState({ open });
  };

  addPicture(){
/*    if (this.nic.value === '') return;
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
            });*/

    this.setModalOpen(false);
  }

  render() {
    return (
      <div>
        <Button bsSize="small" bsStyle='success' onClick={() => this.setModalOpen(true)}>Add picture</Button>
        <Modal
          open={this.state.open}
          onClose={() => {}}
          center
          closeOnEsc
          closeOnOverlayClick
          >
          aaaaaaaaaaaa
          <Button onClick={() => this.setModalOpen(false)}>Close</Button>

        </Modal>
      </div>
    );
  }
}
