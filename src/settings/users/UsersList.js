import React, { Component } from 'react';
import base from '../../firebase';
import ReactTable from 'react-table';
import {Button} from 'react-bootstrap';

export default class TaskList extends Component{

  constructor(props){
    super(props);
    this.state = {
      users:[]
    }
    this.getLocation.bind(this);
    this.remove.bind(this);
  }

  componentWillMount(){
    this.ref2 = base.bindToState(`settings-users`, {
      context: this,
      state: 'users',
      asArray: true
    });
  }

  remove(row){
    if (window.confirm("Are you sure you want to delete user "+row.original.username+"?")) {
      base.remove(`settings-users/`+row.original.id);
    } else {
      return;
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref2);
  }

  getLocation(){
    let url = this.props.history.location.pathname;
    if(url.includes('cmdb')){
      return '/cmdb';
    }else if(url.includes('helpdesk')){
      return '/helpdesk';
    }else{
      return '/lanwiki';
    }
  }

  render(){
    const tableSetting=[
      {
      Header: 'ID',
      accessor: 'id',
      },{
      Header: 'Title',
      accessor: 'username'},
    {
      Header: '',
      accessor: 'edit',
      Cell : row => {
            return (
              <span>
                <Button onClick={() => {
                    this.props.history.push(this.getLocation()+'/settings/users/edit/'+row.original.id)}
                  } bsStyle='warning'>Edit</Button>
                <Button style={{marginLeft:5}} onClick={() => {
                      this.remove(row)}
                    } bsStyle='danger'>Delete</Button>
              </span>
          )
      }
    }];
    const data =[...this.state.users];
    return (
    <div style={{padding:15}}>
      <Button bsStyle="success" onClick={()=>this.props.history.push(this.getLocation()+'/settings/users/add')} style={{marginLeft:10}}>
        Add user
      </Button>
        <ReactTable
          data={data}
          columns={tableSetting}
          className="-striped -highlight"
          />
      </div>
    );
  }
}
