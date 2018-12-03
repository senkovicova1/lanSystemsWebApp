import React, { Component } from 'react';
import { Navbar, Nav, DropdownButton, MenuItem, Glyphicon, Dropdown } from 'react-bootstrap';

export default class PageHeader extends Component {
	constructor() {
		super();
		this.state = {
			companies: [],
		};
		this.getLocation.bind(this);
	}

	getLocation() {
		let url = this.props.history.location.pathname;
		if (url.includes('cmdb')) {
			return '/cmdb';
		} else if (url.includes('helpdesk')) {
			return '/helpdesk';
		} else {
			return '/lanwiki';
		}
	}

	render() {
		return (
			<div className="topbar" style={{ backgroundColor: '#1976d2' }}>
				<div className="topbar-left" style={{ backgroundColor: '#1976d2' }}>
					<Navbar.Brand>
						<DropdownButton
							id="pageSelector"
							title="Lan Systems"
							noCaret
							style={{
								backgroundColor: '#1976d2',
								borderWidth: 0,
								borderRadius: 0,
								marginLeft: 10,
								color: 'white',
								fontSize: 20,
							}}
						>
							<MenuItem onClick={() => this.props.history.push('/demohelpdesk')}>DemoHelpdesk</MenuItem>
						</DropdownButton>
					</Navbar.Brand>
				</div>
				<Nav pullRight>
        <i class="headerIcons" style={{ backgroundColor: '#1976d2', borderWidth: 0, marginRight: 15, color: 'white' }}><i class="fa fa fa-exclamation-triangle"></i></i>
        <i class="headerIcons" style={{ backgroundColor: '#1976d2', borderWidth: 0, marginRight: 10, color: 'white' }}><i class="fa fa-envelope"></i></i>
					<Dropdown pullRight id="settings">
						<Dropdown.Toggle
							noCaret
							style={{ backgroundColor: '#1976d2', borderWidth: 0, marginRight: 10, color: 'white' }}
						>
							<Glyphicon glyph="cog" className="headerIcons" />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<MenuItem onClick={() => this.props.history.push('/demoHelpdesk/settings/companies')}>
								Companies
							</MenuItem>
							<MenuItem onClick={() => this.props.history.push('/demoHelpdesk/settings/users')}>
								Users
							</MenuItem>
							<MenuItem onClick={() => this.props.history.push('/demoHelpdesk/settings/statuses')}>
								Statuses
							</MenuItem>
							<MenuItem onClick={() => this.props.history.push('/demoHelpdesk/settings/types')}>
								Types
							</MenuItem>
							<MenuItem onClick={() => this.props.history.push('/demoHelpdesk/settings/roles')}>
								Roles
							</MenuItem>
							<MenuItem onClick={() => this.props.history.push('/demoHelpdesk/settings/units')}>
								Units
							</MenuItem>
							<MenuItem onClick={() => this.props.history.push('/demoHelpdesk/settings/projects')}>
								projects
							</MenuItem>
						</Dropdown.Menu>
					</Dropdown>
          <i class="headerIcons" style={{ backgroundColor: '#1976d2', borderWidth: 0, marginRight: 10, color: 'white' }}><i class="fas fa-sign-out-alt"></i></i>
				</Nav>
			</div>
		);
	}
}
