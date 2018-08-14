import React, { Component } from 'react';
import { Navbar, NavItem, Nav, FormGroup, FormControl, Button } from 'react-bootstrap';

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
            <a href="#home">Lan Systems</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Here be search" />
            </FormGroup>{' '}
            <Button type="submit" >Submit</Button>
          </Navbar.Form>
        </Nav>

        <Nav pullRight>
          <NavItem eventKey={2} href="#home">
            Here be user
          </NavItem>
        </Nav>

      </Navbar>
    )
  }

}
