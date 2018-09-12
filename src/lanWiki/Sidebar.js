import base from '../firebase';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import TagAdd from './TagAdd';

export default class Tags extends Component{
  constructor(props){
    super(props);
    this.state = {
      kbTags : [],
      openAddTag:false
    }
    //this.isActive.bind(this);
  }

  componentDidMount(){
    this.ref = base.syncState(`kb-tags`, {
      context: this,
      state: 'kbTags',
    asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  isActive(id){
      return this.props.history.location.pathname.toLowerCase().includes('/tag/'+id+'/')||this.props.history.location.pathname.toLowerCase().endsWith('/tag/'+id);
    }

  render(){
    return (
      <ListGroup className='sidebar'>
        <Link className='link' to={{pathname: `/lanwiki/tag/all`}}>
          <ListGroupItem active={this.isActive('all')} className='sidebarItem' >
            All
          </ListGroupItem>
        </Link>
        {
          this.state.kbTags
          .map(asset =>
            {
              return(
                <Link className='link' to={{pathname: `/lanwiki/tag/`+asset.id}}  key={asset.id}>
                  <ListGroupItem active={this.isActive(asset.id)} className='sidebarItem' key={asset.id} >
                    {asset.name}
                  </ListGroupItem>
                </Link>)
              })
            }
            <ListGroupItem onClick={()=>{this.setState({openAddTag:true})}} active={this.isActive('add')} className='sidebarItem addTagSidebar' >
              +Tag
            </ListGroupItem>
            <Modal show={this.state.openAddTag} onHide={()=>{this.setState({openAddTag:false})}}>
              <Modal.Header closeButton>
                <Modal.Title>Add tag</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <TagAdd closeModal={()=>{this.setState({openAddTag:false})}} />
              </Modal.Body>
            </Modal>
          </ListGroup>
        );

      }
    }
