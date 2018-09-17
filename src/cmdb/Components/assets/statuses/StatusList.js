import React, { Component } from 'react';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DataTable from '../../DataTable';

export default class StatusList extends Component{

  constructor(props){
    super(props);
    this.loadColumnNames.bind(this);
    this.loadAddButton.bind(this);
    this.remove.bind(this);
  }

  remove(row){
    firebase.database()
            .ref(`cmdb-statuses/${row.original.id}`)
            .remove();
  }

  loadAddButton(){
    return (
      <Link className='DataTableAdd' to={{pathname: `statuses/add`}}>
        <Button bsStyle="success" className='DataTableAddButton' >+ Add Status</Button>
      </Link>);
  }

  loadColumnNames(){
      return [{
                Header: 'Name',
                accessor: 'statusName',
              },{
                Header: '',
                accessor: 'edit',
                Cell : row => {
                      return (
                        <div>
                          <Link to={{pathname: `/cmdb/statuses/edit/${row.original.id}`}}>
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
          <DataTable database={'cmdb-statuses'} columns={COLUMNS} loadButton={this.loadAddButton.bind(this)} />
      </div>
    );
  }
}
