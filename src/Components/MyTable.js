import base from '../base';
import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import Server from './Server'
import AddServerForm from './AddServerForm'

export default class MyTable extends Component{

  constructor(){
    super();
    this.state = {
      servers : [],
      openAdd : false,
      serverToEdit : null
    }
    this.add = false;
  }

  componentWillMount(){
    this.ref = base.syncState(`servers`, {
      context: this,
      state: 'servers'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addServer(server, company) {
    if (server.value === ""){
      return;
    }
    const SRVS = {...this.state.servers};
    let id = 1;
    while (SRVS['server'+id] !== undefined){
      id++;
    }
      SRVS['server'+id] = {
        id: id,
        serverName: server.value,
        companyName: company.value
      };
    this.setState({
        servers: SRVS
    });
  }

  updateServer(id, server, company){
    const SRVS = {...this.state.servers};
      SRVS['server'+id] = {
        id: id,
        serverName: server.value,
        companyName: company.value
      };
    this.setState({
        servers: SRVS,
        openAdd: false,
        serverToEdit: null
      });
  }

  helpUpdateServer(server){
    this.setState(
      { openAdd: true,
        serverToEdit : server
      });
      console.log(server);
  }

  setOpenAdd(){
    this.setState(
      {openAdd: false}
    );
  }

  setOpenEdit(){
    this.setState(
      {openEdit: false}
    );
  }

  render(){
    return (
      <div>
        {
            !this.state.openAdd && !this.state.openEdit &&
            <Button bsStyle="success"
            onClick={() => this.setState({openAdd : true})}>+ Add Server</Button>
        }
            <AddServerForm addServer={this.addServer.bind(this)} updateServer={this.updateServer.bind(this)} add={this.state.openAdd} server={this.state.serverToEdit} setOpenAdd={this.setOpenAdd.bind(this)}/>

      {
          !this.state.openAdd && !this.state.openEdit &&
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
                .keys(this.state.servers)
                .map(key => <Server key={key} server={this.state.servers[key]} update={this.helpUpdateServer.bind(this)}/>)
              }
            </tbody>
          </Table>
        }
      </div>
    );
  }

}
