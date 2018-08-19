import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class AddCompanyForm extends React.Component {

  constructor(props){
    super(props);

      this.addCompany = this.addCompany.bind(this);
  }

  addCompany(e){
    if (this.company.value.length < 1) return;
    const ID = Date.now();
    firebase.database()
            .ref(`companies/${ID}`)
            .set({
              id: ID,
              companyName : this.company.value,
            });
  }

  render() {
    return (

        <form ref={(input) => this.companyForm = input} className="company-add" onSubmit={(e) => this.addCompany(e)}>

          <FormGroup controlId="formGoupInput">
            <ControlLabel>Company Name</ControlLabel>
            <FormControl  inputRef={(input) => this.company = input} type="text" placeholder="Enter Company Name"/>
          </FormGroup>

          <Link to={{pathname : '/companies'}}>
            <Button type="submit" onClick={() => this.addCompany()} bsStyle='success' >+ Add Company</Button>
          </Link>
        </form>
        );
    }
}
