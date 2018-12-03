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
						<li className="menu-title">
							<button
								type="button"
								class="btn btn-outline-secondary btn-rounded waves-effect"
								style={{ width: 210, textAlign: 'left' }}
							>
								<i class="fa fa-plus" /> NEW TASK
							</button>
						</li>
						<hr />
						<li className="menu-title">
							FILTERS
							<span class="pull-right">
								<i class="fa fa-plus" />
							</span>
						</li>

						<ul className="sidebar-menu">
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									Riešiť
								</Link>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									Všetky úlohy
								</Link>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									Messages
								</Link>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									Alerts
								</Link>
							</li>
						</ul>
						<hr />
						<li className="menu-title">
							Projects
							<span class="pull-right">
								<i class="fa fa-plus" />
							</span>
						</li>
						<ul className="sidebar-menu">
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									hotline@lansystems.sk
								</Link>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									www.kovostav.sk
								</Link>
							</li>
						</ul>
						<hr />
						<li className="menu-title">
							Vykazy
							<span class="pull-right">
								<i class="fa fa-plus" />
							</span>
						</li>
						<ul className="sidebar-menu">
							<li />
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									Mesačný
								</Link>
							</li>
						</ul>
						<hr />
						<li className="menu-title">
							Archivovane Projekty
							<span class="pull-right">
								<i class="fa fa-archived" />
							</span>
						</li>

						<ul className="sidebar-menu">
							<li />
							<li>
								<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
									Orchestra
								</Link>
							</li>
						</ul>
						<hr />
						{/* 
						<ul className="sidebar-menu">
							<li className="menu-title">
								<i class="fa fa-cog" /> Settings
							</li>
							<li className="menu-title">
								<i class="fa fa fa-exclamation-triangle" /> Alerts
							</li>
							<li className="menu-title">
								<i class="fa fa-envelope" /> Messages
							</li>
						</ul>
						*/}
					</div>
				</div>
			</div>
		);
	}
}
