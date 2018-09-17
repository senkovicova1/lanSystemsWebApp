import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class PlaceAdd extends React.Component {

  constructor(props){
    super(props);

    this.addPlace.bind(this);
  }

  addPlace(){
    if (this.room.length < 1 && this.street.length < 1 && this.city.length < 1 && this.state.length < 1) return;
    const ID = Date.now();
    firebase.database()
            .ref(`cmdb-places/${ID}`)
            .set({
              id: ID,
               room  : this.room.value,
               street : this.street.value,
               city : this.city.value,
               state : this.state.value,
            });
  }

  render() {
    return (

        <div className='form'>
          <FormGroup controlId="formGoupInput">
            <ControlLabel>Place room</ControlLabel>
            <FormControl  inputRef={(input) => this.room = input} type="text" placeholder="Enter Place room"/>
          </FormGroup>

          <FormGroup controlId="formGoupInput">
            <ControlLabel>Place street</ControlLabel>
            <FormControl  inputRef={(input) => this.street = input} type="text" placeholder="Enter Place street"/>
          </FormGroup>

          <FormGroup controlId="formGoupInput">
            <ControlLabel>Place city</ControlLabel>
            <FormControl  inputRef={(input) => this.city = input} type="text" placeholder="Enter Place city"/>
          </FormGroup>

          <FormGroup controlId="formGoupInput">
            <ControlLabel>Place state</ControlLabel>
            <FormControl  inputRef={(input) => this.state = input} type="text" placeholder="Enter Place state"/>
          </FormGroup>

          <Link to={{pathname : '/cmdb/places'}}>
            <Button type="submit" onClick={ this.addPlace.bind(this)} bsStyle='success' >+ Add Place</Button>
          </Link>
        </div>
        );
    }
}
