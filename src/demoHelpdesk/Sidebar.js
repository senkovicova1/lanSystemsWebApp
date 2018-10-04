import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
		return (
			<div className="left side-menu">
				<div className="sidebar-inner slimscrollleft">
					<div id="sidebar-menu">
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
					</div>
				</div>
			</div>
		);
	}
}
