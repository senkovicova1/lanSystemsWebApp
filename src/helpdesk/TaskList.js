import React, { Component } from 'react';
import base from '../firebase';
import ReactTable from 'react-table';
import { Badge, Glyphicon } from 'react-bootstrap';

export default class TaskList extends Component{

  constructor(props){
    super(props);
    this.state = {
      tasks:[],
      statuses:[],
      status:'all'
    }
    this.rebindData.bind(this);
  }

  componentWillMount(){
    this.ref = base.bindToState(`hd-statuses`, {
      context: this,
      state: 'statuses',
      asArray: true
    });
    this.ref2 = base.bindToState(`hd-tasks`, {
      context: this,
      state: 'tasks',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    base.removeBinding(this.ref2);
  }

  rebindData(item){
    base.removeBinding(this.ref2);
    if(item.id==='all'){
      this.ref2 = base.bindToState(`hd-tasks`, {
        context: this,
        state: 'tasks',
        asArray: true
      });
    }else{
      this.ref2 = base.bindToState(`hd-tasks`, {
        context: this,
        state: 'tasks',
        asArray: true,
        queries: {
          orderByChild: 'status',
          equalTo: item.id
        }
      });
    }
  }

  render(){
    const tableSetting=[
      {
        Header: 'ID',
        accessor: 'id',
      },{
        Header: 'Title',
        accessor: 'title',
      },{
        Header: 'Status',
        accessor: 'status',
        Cell : row => {
          let status=this.state.statuses.find((item)=>item.id===row.value);
          return (
            <span>{status?status.title:'Unknown status'}</span>
          )
        }
      }
    ];
    const data =[...this.state.tasks];
    return (
      <div style={{padding:15}}>
        <div style={{padding:15}}>
          {[{id:'all',title:'All'}].concat(this.state.statuses).map((item)=>
          <Badge key={item.id} className="statusStyle" style={{backgroundColor:this.state.status===item.id?'#337ab7':'#8db9df'}}
            >
            <span style={{margin:'auto'}}
              onClick={()=>{
                this.setState({status:item.id});
                this.rebindData(item);
              }}
              >{item.title}</span>
            {item.id!=='all' &&
              <Glyphicon style={{marginLeft:5}}
                glyph="remove-sign"
                onClick={()=>{
                  if (window.confirm("Are you sure you want to delete status "+ item.title+"?")) {
                    base.remove(`hd-statuses/`+item.id);
                    this.setState({status:'all'});
                    this.rebindData({id:'all',title:'All'});
                  } else {
                    return;
                  }
                }
              }
              />}
            </Badge>)}
          </div>
          <ReactTable
            data={data}
            columns={tableSetting}
            className="-striped -highlight"
            />
        </div>
      );
    }
  }
