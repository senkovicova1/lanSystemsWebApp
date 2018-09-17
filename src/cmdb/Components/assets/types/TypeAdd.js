import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class TypeAdd extends React.Component {

  constructor(props){
    super(props);
    this.addType.bind(this);
  }

  addType(){
    if (this.type.value.length < 1) return;
    const ID = Date.now();
    firebase.database()
            .ref(`cmdb-types/${ID}`)
            .set({
              id: ID,
              typeName : this.type.value,
            });
  }

  render() {
    return (

        <div className='form'>
          <FormGroup controlId="formGroupInput">
            <ControlLabel>Type Name</ControlLabel>
            <FormControl  inputRef={(input) => this.type = input} type="text" placeholder="Enter Type Name"/>
          </FormGroup>

          <Link to={{pathname : '/cmdb/types'}}>
            <Button type="submit" onClick={ this.addType.bind(this)} bsStyle='success' >+ Add Type</Button>
          </Link>
        </div>
        );
    }
}
