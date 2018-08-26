import base from '../base';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import sampleNIC from '../sampleNIC';

export default class MyTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      assets : [],
      assetType : this.props.location.pathname.substr(1),
//      nics : sampleNIC,
    }
    this.loadColumnNames.bind(this);
//    this.addNICs.bind(this);
  }


    componentWillMount(){
      const DB = this.props.location.pathname.substr(1);

      this.ref = base.syncState(`${DB}`, {
        context: this,
        state: 'assets'
      });
    }

/*
  componentWillMount(){
    const DB = this.props.location.pathname.substr(1);

    this.ref = base.syncState(`nics`, {
      context: this,
      state: 'nics'
    });
  }

  addNICs(){
      this.setState({
        nics : sampleNIC,
      })
    }*/

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadColumnNames(){
    switch (this.state.assetType) {
      case 'servers':
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
                          <Link to={{pathname: `servers/edit/${row.original.id}`}}>
                              <Button bsStyle='warning'>Edit</Button>
                          </Link>
                      )
                  },
                  filterMethod: (filter, row) => true,
                }];

      case 'companies':
        return [{
                  Header: 'Name',
                  accessor: 'companyName',
                },{
                  Header: '',
                  accessor: 'edit',
                  Cell : row => {
                        return (
                          <Link to={{pathname: `companies/edit/${row.original.id}`}}>
                              <Button bsStyle='warning'>Edit</Button>
                          </Link>
                      )
                  },
                  filterMethod: (filter, row) => true,
                }];

      default:
        return [];
    }
  }

  render(){
    const DATA = Object.values(this.state.assets);
    const COLUMNS = this.loadColumnNames();

    return (
      <div className='MyTable'>
       <Link className='MyTableAddButton' to={{pathname: `${this.props.location.pathname.substr(1)}/add`}}>
         <Button bsStyle="success" className='MyTableAddButton' >+ Add</Button>
       </Link>

  {/*     <Button onClick={this.addNICs.bind(this)}>asdsad</Button> */}

        <ReactTable
          data={DATA}
          filterable
          defaultFilterMethod={(filter, row) =>
            row[filter.id].toLowerCase().includes(filter.value.toLowerCase())}
          columns={COLUMNS}
          defaultPageSize={20}
          className="-striped -highlight"
        />

      </div>
    )
  }

}