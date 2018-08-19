import base from '../base';
import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Server from './Server';
import Company from './Company';

export default class MyTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      assets : [],
      assetType : this.props.location.pathname.substr(1),
    }
    this.renderServers.bind(this);
    this.renderCompanies.bind(this);
    this.loadAssets.bind(this);
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

    loadAssets(){
      switch (this.state.assetType) {
        case "servers":
            return this.renderServers();
        case "companies":
            return this.renderCompanies();
        default:
            return <p>No asset selected.</p>
      }
    }

  renderCompanies(){
    return(
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
            .map(key => <Company key={key} asset={this.state.assets[key]}/>)
          }
        </tbody>
      </Table>
    )
  }

  renderServers(){
    return(
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
            .map(key => <Server key={key} asset={this.state.assets[key]}/>)
          }
        </tbody>
      </Table>
    )
  }

  render(){
    return (
      <div>
           <Link to={{pathname: `${this.props.location.pathname.substr(1)}/add`}}>
             <Button bsStyle="success">+ Add</Button>
           </Link>

            {
              this.loadAssets()
            }

      </div>
    );
  }


}
