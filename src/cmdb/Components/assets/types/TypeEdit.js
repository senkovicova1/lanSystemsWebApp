import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class TypeEdit extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        name : null,
        id : null,
      }
      this.editType.bind(this);
  }

  componentDidMount(){
    const ID = this.props.match.params.id;
    const DB = firebase.database().ref(`cmdb-types/${ID}`);
    DB.on('value', snap =>
        this.setState({
          id : snap.val().id,
          name : snap.val().typeName
        })
      );

  }

  editType(){
    firebase.database()
            .ref(`cmdb-types/${this.state.id}`)
            .update({
              typeName : this.state.name,
            });
  }


  render() {
    return (
          <div className='form'>
            <FormGroup controlId="formGoupInput">
              <ControlLabel>Type Name</ControlLabel>
              <FormControl type="text" placeholder='Enter name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
            </FormGroup>

            <Link to={{ pathname: '/cmdb/types'}}>
              <Button type="submit" onClick={this.editType.bind(this)} bsStyle='warning'>Edit this type</Button>
            </Link>
          </div>
        );
  }
}
