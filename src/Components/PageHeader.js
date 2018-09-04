import React, { Component } from 'react';
import { Navbar, NavItem, Nav} from 'react-bootstrap';

export default class PageHeader extends Component{

  constructor(){
    super();
    this.state = {
      companies : []
    }
  }

  render(){
    return(
      <Navbar inverse>

        <header>
          <Navbar.Brand>
            <a href="/home">Lan Systems</a>
          </Navbar.Brand>
        </header>

        <Nav pullRight>
          <NavItem href="/home">
            Here be user
          </NavItem>
        </Nav>

      </Navbar>
    )
  }

}
