import React, { Component } from 'react';
import { Navbar, NavItem, Nav,DropdownButton,MenuItem } from 'react-bootstrap';

export default class PageHeader extends Component{

  constructor(){
    super();
    this.state = {
      companies : []
    }
  }

  render(){
    return(
        <header style={{borderRadius:0,border:'2px solid #8db9df', color:'black'}}>
          <Navbar.Brand>
            <DropdownButton
              bsStyle="default"
              title="Lan Systems"
              noCaret
              id="dropdown-no-caret"
              style={{backgroundColor:'inherit', borderWidth:0}}
            >
            <MenuItem onClick={()=>this.props.history.push('/cmdb')}>CMDB</MenuItem>
            <MenuItem onClick={()=>this.props.history.push('/lanwiki')}>LanWiki</MenuItem>
            </DropdownButton>
          </Navbar.Brand>
            <Nav pullRight>
            <NavItem href="/home">
              Here be user
            </NavItem>
          </Nav>
        </header>
    )
  }

}
