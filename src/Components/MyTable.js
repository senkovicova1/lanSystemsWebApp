import base from '../base';
import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Server from './Server';
//import AddServerForm from './AddServerForm';

export default class MyTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      assets : [],
    }
  }

  componentWillMount(){
    const DB = this.props.location.pathname.substr(1);

    this.ref = base.syncState(`${DB}`, {
      context: this,
      state: 'assets'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render(){
    return (
      <div>
           <Link to={{pathname: `${this.props.location.pathname.substr(1)}/add`}}>
             <Button bsStyle="success">+ Add</Button>
           </Link>

          <Table hover>
            <thead>
              <tr>
                <th>Server Name</th>
                <th>Company Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                Object
                .keys(this.state.assets)
                .map(key => <Server key={key} server={this.state.assets[key]}/>)
              }
            </tbody>
          </Table>

      </div>
    );
  }

}
