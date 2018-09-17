import React, { Component } from 'react';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DataTable from '../../DataTable';

export default class ServerList extends Component{

  constructor(props){
    super(props);
    this.loadColumnNames.bind(this);
    this.loadAddButton.bind(this);
    this.remove.bind(this);
  }

  remove(row){
    firebase.database()
            .ref(`cmdb-servers/${row.original.id}`)
            .remove();
  }

  loadAddButton(){
    return (
      <Link className='DataTableAdd' to={{pathname: `servers/add`}}>
        <Button bsStyle="success" className='DataTableAddButton' >+ Add Server</Button>
      </Link>);
  }

  loadColumnNames(){
      return [{
                Header: 'Name',
                accessor: 'serverName',
              }, {
                Header: 'Company Name',
                accessor: 'companyName',
              },{
                Header: '',
                accessor: 'edit',
                Cell : row => {
                      return (
                        <div>
                          <Link to={{pathname: `servers/edit/${row.original.id}`}}>
                              <Button bsStyle='warning'>Edit</Button>
                          </Link>
                          <Button onClick={() => {
                              this.remove(row)}
                            } bsStyle='danger'>Remove</Button>
                        </div>
                    )
                },
                filterMethod: (filter, row) => true,
              }];
  }

  render(){
    const COLUMNS = this.loadColumnNames();
    return (
      <div className='mainContainer'>
         <DataTable database={'cmdb-servers'} columns={COLUMNS} loadButton={this.loadAddButton.bind(this)} />
      </div>
    );
  }
}
