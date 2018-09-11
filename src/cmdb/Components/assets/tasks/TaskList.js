import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

import firebase from 'firebase';
import DataTable from '../../DataTable';
import TaskAddModal from './TaskAddModal';
import TaskEdit from './TaskEdit';

export default class TaskList extends Component{

  constructor(props){
    super(props);
    this.state =
      {
        task : null,
      };

    this.loadColumnNames.bind(this);
    this.loadAddButton.bind(this)
    this.remove.bind(this);
    this.chosenTask.bind(this);
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
        Cell : row => <div
                style={{ backgroundColor: "#fafafa" }}
                onClick={() => this.chosenTask(row.original)}
                dangerouslySetInnerHTML={{
                    __html: row.original.title
                }}
              />

        }];/*[{
                Header: 'Title',
                accessor: 'title',
                Cell : row => {
                      return (
                        <div>
                          <TaskEdit info={row.original} />
                        </div>
                    )
                }
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
              }];*/
  }

  chosenTask(task){
    this.setState({ task })
  }

  render(){
      const COLUMNS = this.loadColumnNames();
      return (
        <div className='mainContainer'>
          <Col xs={4} className='noPadding'>
            <DataTable chosenTask={this.chosenTask.bind(this)} database={'tasks'} columns={COLUMNS} loadButton={this.loadAddButton.bind(this)} />
          </Col>
          <Col xs={8} >
            { this.state.task !== null && <TaskEdit info={this.state.task} /> }
          </Col>
        </div>
      );
  }
}
