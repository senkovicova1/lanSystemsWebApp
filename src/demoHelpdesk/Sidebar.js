import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openAddStatusModal: false,
			openAddTaskModal: false,
			isColumn: false,
			search: '',
		};
	}
	render() {
		const projects = [
			{ value: 'hotline@lansystems.sk', label: 'hotline@lansystems.sk' },
			{ value: 'Mertel CRM', label: 'Mertel CRM' },
			{ value: 'All', label: 'All' },
		];

		const selectStyle = {
			control: styles => ({ ...styles, backgroundColor: 'white', maxHeight: 30 }),
		};

		return (
			<div className="left side-menu">
				<div className="sidebar-inner slimscrollleft">
					<div id="sidebar-menu">
						<div class="form-group" style={{ margin: 15 }}>
							<label>Projekty</label>
							<Select options={projects} styles={selectStyle} />
						</div>

						<li className="text-muted menu-title">Filters</li>
						<ul className="sidebar-menu">
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									All Tasks
								</Link>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									My Tasks
								</Link>
							</li>
						</ul>

						<li className="text-muted menu-title">Active projects</li>
						<ul className="sidebar-menu">
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									hotline@lansystems.sk
								</Link>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									Mertel CRM
								</Link>
							</li>
						</ul>
						<li className="text-muted menu-title">Archived projects</li>
						<ul className="sidebar-menu" />
						<li className="text-muted menu-title">Settings</li>
						<ul className="sidebar-menu">
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/settings/users` }}>
									Users
								</Link>
							</li>
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/settings/companies` }}>
									Companies
								</Link>
							</li>
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/settings/statuses` }}>
									Status
								</Link>
							</li>
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/settings/types` }}>
									Typ práce
								</Link>
							</li>
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/settings/roles` }}>
									User roles
								</Link>
							</li>
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/settings/units` }}>
									Jednotky
								</Link>
							</li>
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/settings/projects` }}>
									Projects

								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
