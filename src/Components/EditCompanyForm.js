import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class EditCompanyForm extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        company : 0,
      }
      this.editCompany = this.editCompany.bind(this);
  }

  componentDidMount(){
    const SERVER_ID = this.props.match.params.id;
    const DB = firebase.database().ref(`companies/${SERVER_ID}`);
    DB.on('value', snap =>
        this.setState({
          company : snap.val()
        })
      );

  }

  editCompany(event){
    firebase.database()
            .ref(`companies/${this.state.company.id}`)
            .update({
              companyName : this.company.value,
            });
  }


  render() {
    return (
          <form ref={(input) => this.companyForm = input} className="companyEdit" onSubmit={(e) => this.editCompany(e)} >

            <FormGroup controlId="formGoupInput">
              <ControlLabel>Server Name</ControlLabel>
              <FormControl  inputRef={(input) => this.company = input} type="text" placeholder={this.state.company.companyName}/>
            </FormGroup>

            <Link to={{ pathname: '/companies'}}>
              <Button type="submit" onClick={(e) => this.editCompany(e)} bsStyle='warning'>Edit this company</Button>
            </Link>
          </form>
        );
  }
}
