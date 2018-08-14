import base from '../base';
import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class SideBar extends Component{

  constructor(){
    super();
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
    return (
      <div>
        <ListGroup>
          {
          Object
            .keys(this.state.assets)
            .map(asset =>
                <ListGroupItem  bsStyle='info' key={this.state.assets[asset]} href={`${this.state.assets[asset]}`} onClick={(input) => this.asset = this.state.assets[asset]}>
                  {this.state.assets[asset]}
                </ListGroupItem>)
          }
        </ListGroup>
      </div>
    )
  }

}
