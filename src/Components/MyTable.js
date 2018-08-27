import base from '../base';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddTaskModalForm from './AddTaskModalForm';
import EditTaskModalForm from './EditTaskModalForm';

//import sampleUsers from '../sampleUsers';

export default class MyTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      assets : [],
      assetType : this.props.location.pathname.substr(1),
//      users : sampleUsers,
    }
    this.loadColumnNames.bind(this);
//    this.addUsers.bind(this);
  }

  componentWillMount(){
      const DB = this.props.location.pathname.substr(1);

      this.ref = base.syncState(`${DB}`, {
        context: this,
        state: 'assets'
      });
/*      this.ref2 = base.syncState(`users`, {
        context: this,
        state: 'users'
      });
  }

  addUsers(){
      this.setState({
        users : sampleUsers,
      });*/
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
//      base.removeBinding(this.ref2);
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
      case 'tasks':
        return [{
                  Header: 'Title',
                  accessor: 'title',
                },{
                  Header: 'Description',
                  accessor: 'description',
                },{
                  Header: 'Status',
                  accessor: 'status',
                },{
                  Header: 'Made by',
                  accessor: 'by',
                },{
                  Header: 'Solved by',
                  accessor: 'solves',
                },{
                  Header: '',
                  accessor: 'edit',
                  Cell : row => {
                        return (
                          <div>
                            <EditTaskModalForm info={row.original} />
                          </div>
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
        {
          (this.state.assetType === 'tasks')
            ?
            <AddTaskModalForm />
            :
             <Link className='MyTableAddButton' to={{pathname: `${this.props.location.pathname.substr(1)}/add`}}>
               <Button bsStyle="success" className='MyTableAddButton' >+ Add</Button>
             </Link>
        }
{/* <Button onClick={this.addUsers.bind(this)}>asdsad</Button> */}

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
