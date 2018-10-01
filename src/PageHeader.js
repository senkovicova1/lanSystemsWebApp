import React, { Component } from 'react';
import { Navbar, Nav,DropdownButton,MenuItem, Glyphicon, Dropdown } from 'react-bootstrap';

export default class PageHeader extends Component{

  constructor(){
    super();
    this.state = {
      companies : []
    }
    this.getLocation.bind(this);
  }

  getLocation(){
    let url = this.props.history.location.pathname;
    if(url.includes('cmdb')){
      return '/cmdb';
    }else if(url.includes('helpdesk')){
      return '/helpdesk';
    }else{
      return '/lanwiki';
    }
  }

  render(){
    return(
      <div className="topbar">
        <div className="topbar-left">
        <Navbar.Brand>
          <DropdownButton
            id="pageSelector"     
            title="Lan Systems"
            noCaret
            style={{backgroundColor:'#36404a', borderWidth:0, borderRadius:0, marginLeft:20}}
            >
            <MenuItem onClick={()=>this.props.history.push('/cmdb')}>CMDB</MenuItem>
            <MenuItem onClick={()=>this.props.history.push('/lanwiki')}>LanWiki</MenuItem>
            <MenuItem onClick={()=>this.props.history.push('/helpdesk')}>Helpdesk</MenuItem>
            <MenuItem onClick={()=>this.props.history.push('/demohelpdesk')}>DemoHelpdesk</MenuItem>
          </DropdownButton>
        </Navbar.Brand>
        </div>
      <header className="navbar-custom">

        <Nav pullRight>
          <Dropdown pullRight id="settings">
            <Dropdown.Toggle noCaret style={{backgroundColor:'#36404a', borderWidth:0, marginRight:10}}>
              <Glyphicon glyph="cog" className="headerIcons" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <MenuItem onClick={()=>this.props.history.push(this.getLocation()+'/settings/companies')}>Companies</MenuItem>
              <MenuItem onClick={()=>this.props.history.push(this.getLocation()+'/settings/users')}>Users</MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </header>
      </div>
    )
  }
}
