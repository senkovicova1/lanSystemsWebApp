import base from '../firebase';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Sidebar extends Component{

  constructor(props){
    super(props);
    this.state = {
        assets : []
    }
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


  render(){
    const PAGE = this.props.location.pathname.substr(1).toLowerCase();
    return (
      <div className="sidebar">

        <ListGroup>
          {
          Object
            .keys(this.state.assets)
            .map(asset =>
              {
                return (this.state.assets[asset].toLowerCase() === PAGE) ?
                  <Link className='link' to={{pathname: `/${this.state.assets[asset].toLowerCase()}`}}  key={this.state.assets[asset]}>
                    <ListGroupItem active className='sidebarItem' key={this.state.assets[asset]} >
                      {this.state.assets[asset]}
                    </ListGroupItem>
                  </Link>
                :
                  <Link className='link' to={{pathname: `/${this.state.assets[asset].toLowerCase()}`}}  key={this.state.assets[asset]}>
                    <ListGroupItem className='sidebarItem' key={this.state.assets[asset]} >
                      {this.state.assets[asset]}
                    </ListGroupItem>
                  </Link>
              })
          }
        </ListGroup>
      </div>
    )
  }

}
