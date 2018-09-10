import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


export default class Comments extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='mainContainer'>
        <FormGroup controlId="textareaDescription">
          <ControlLabel><h2> Comments </h2></ControlLabel>
          <FormControl componentClass="textarea" placeholder='Add a comment' />
        </FormGroup>
      </div>
    );
  }
}
