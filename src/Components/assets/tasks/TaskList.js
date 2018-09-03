import React, { Component } from 'react';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DataTable from '../../DataTable';
import TaskAddModal from './TaskAddModal';
import TaskEditModal from './TaskEditModal';

export default class TaskList extends Component{

  constructor(props){
    super(props);
    this.loadColumnNames.bind(this);
    this.loadAddButton.bind(this)
    this.remove.bind(this);
  }

  remove(row){
    firebase.database()
            .ref(`tasks/${row.original.id}`)
            .remove();
  }

  loadAddButton(){
    return (
      <TaskAddModal />
    );
  }

  loadColumnNames(){
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
                          <TaskEditModal info={row.original} />
                        </div>
                    )
                },
                filterMethod: (filter, row) => true,
              }];
  }

  render(){
      const COLUMNS = this.loadColumnNames();
      return (
      <DataTable database={'tasks'} columns={COLUMNS} loadButton={this.loadAddButton.bind(this)} />
    );
  }
}
