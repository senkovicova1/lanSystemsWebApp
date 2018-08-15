import base from '../base';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class SideBar extends Component{

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
    return (
      <div>
        <ListGroup>
          {
          Object
            .keys(this.state.assets)
            .map(asset =>
              <Link to={{pathname: `/${this.state.assets[asset].toLowerCase()}`}}  key={this.state.assets[asset]}>
                <ListGroupItem  bsStyle='info' key={this.state.assets[asset]} >
                  {this.state.assets[asset]}
                </ListGroupItem>
              </Link>)
          }
        </ListGroup>
      </div>
    )
  }

}
