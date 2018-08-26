import React, { Component } from 'react';
import { Navbar, NavItem, Nav} from 'react-bootstrap';

export default class Navigation extends Component{

  constructor(){
    super();
    this.state = {
      companies : []
    }
  }

  render(){
    return(
      <Navbar inverse>

        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">Lan Systems</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav pullRight>
          <NavItem href="/home">
            Here be user
          </NavItem>
        </Nav>

      </Navbar>
    )
  }

}
