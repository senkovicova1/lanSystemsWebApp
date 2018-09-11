import base from '../../firebase';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Sidebar extends Component{

  constructor(props){
    super(props);
    this.state = {
        assets : []
    }
    this.isActive.bind(this);
  }

  componentDidMount(){
    this.ref = base.syncState(`assets`, {
      context: this,
      state: 'assets'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  isActive(item){
    console.log(this.props.location.pathname);
    console.log(item);
      return this.props.location.pathname.toLowerCase().indexOf(item.toLowerCase()) > -1;
    }

  render(){
    return (
      <div className="sidebar">

        <ListGroup>
          {
          Object
            .keys(this.state.assets)
            .map(asset =>
                  <Link className='link' to={{pathname: `/cmdb/${this.state.assets[asset].toLowerCase()}`}}  key={this.state.assets[asset]}>
                    <ListGroupItem active={this.isActive(this.state.assets[asset])} className='sidebarItem' key={this.state.assets[asset]} >
                      {this.state.assets[asset]}
                    </ListGroupItem>
                  </Link>
              )
          }
        </ListGroup>
      </div>
    )
  }

}
