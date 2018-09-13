import base from '../firebase';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { ListGroup, ListGroupItem, Modal,FormGroup, FormControl, Glyphicon, InputGroup } from 'react-bootstrap';

const fakeProjects=[{value:'all',label:'All'},{value:1,label:'Proj 1'},{value:2,label:'Proj 2'},{value:3,label:'Proj 3'}]

export default class Tags extends Component{
  constructor(props){
    super(props);
    this.state = {
      project : fakeProjects[0],
      openAddTag:false,
      search:''
    }
    //this.isActive.bind(this);
  }

  isActive(id){
    return this.props.history.location.pathname.toLowerCase().includes(id) &&! this.props.history.location.pathname.toLowerCase().includes(id+'/');
  }

  render(){
    return (
      <ListGroup className='sidebar fullWidth'>
        <ListGroupItem className='sidebarItem noColor' >
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
            <FormControl type="text"
              placeholder="Search"
              onChange={e => {
                this.setState({ search: e.target.value });
              }}
              value={this.state.search}/>
          </InputGroup>
        </ListGroupItem>
        <ListGroupItem className='sidebarItem noColor' >
          <label>Project</label>
          <Select
            options={fakeProjects}
            value={this.state.project}
            onChange={e =>{ this.setState({ project: e })}}
            />
        </ListGroupItem>
          <Link className='link' to={{pathname: `/helpdesk/filter/2`}}>
            <ListGroupItem active={this.isActive('/helpdesk/filter/2')} className='sidebarItem' >
              All tasks
            </ListGroupItem>
          </Link>
          <Link className='link' to={{pathname: `/helpdesk/filter/1`}}>
            <ListGroupItem active={this.isActive('/helpdesk/filter/1')} className='sidebarItem' >
              My tasks
            </ListGroupItem>
          </Link>
          <Link className='link' to={{pathname: `/helpdesk/filter`}}>
            <ListGroupItem active={this.isActive('/helpdesk/filter')} className='sidebarItem' >
              + Filter
            </ListGroupItem>
          </Link>

      </ListGroup>
    );

  }
}
