import React, { Component } from 'react';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DataTable from '../../DataTable';

export default class TypeList extends Component{

  constructor(props){
    super(props);
    this.loadColumnNames.bind(this);
    this.loadAddButton.bind(this);
    this.remove.bind(this);
  }

  remove(row){
    firebase.database()
            .ref(`cmdb-types/${row.original.id}`)
            .remove();
  }

  loadAddButton(){
    return (
      <Link className='DataTableAdd' to={{pathname: `types/add`}}>
        <Button bsStyle="success" className='DataTableAddButton' >+ Add Type</Button>
      </Link>);
  }

  loadColumnNames(){
      return [{
                Header: 'Name',
                accessor: 'typeName',
              },{
                Header: '',
                accessor: 'edit',
                Cell : row => {
                      return (
                        <div>
                          <Link to={{pathname: `/cmdb/types/edit/${row.original.id}`}}>
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
          <DataTable database={'cmdb-types'} columns={COLUMNS} loadButton={this.loadAddButton.bind(this)} />
      </div>
    );
  }
}
