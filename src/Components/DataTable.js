import base from '../firebase';
import firebase from 'firebase';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

//import sampleUsers from '../samples/sampleUsers';

export default class DataTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      assets : [],
//      users : sampleUsers,
    }
//    this.addUsers.bind(this);
  }

  componentWillMount(){

      this.ref = base.syncState(`${this.props.database}`, {
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

  render(){
    const DATA = Object.values(this.state.assets);
    const COLUMNS = this.props.columns;

    return (
      <div className='DataTable'>

        {this.props.loadButton()}

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
