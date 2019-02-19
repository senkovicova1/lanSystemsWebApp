import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import classnames from 'classnames';

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			openAddStatusModal: false,
			openAddTaskModal: false,
			isColumn: false,
			search: '',
			activeTab: '1',
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}


	render() {
		const projects = [
			{ value: 'hotline@lansystems.sk', label: 'hotline@lansystems.sk' },
			{ value: 'Mertel CRM', label: 'Mertel CRM' },
			{ value: 'All', label: 'All' },
		];
		const statuses = [
			{ value: 'new', label: 'New' },
			{ value: 'open', label: 'Open' },
			{ value: 'open', label: 'Pending' },
			{ value: 'pending', label: 'Closed' },
		];
		const selectStyle = {
			control: base => ({
				...base,
				minHeight: 30,
				backgroundColor: 'white',
			}),
			dropdownIndicator: base => ({
				...base,
				padding: 4,
			}),
			clearIndicator: base => ({
				...base,
				padding: 4,
			}),
			multiValue: base => ({
				...base,
				backgroundColor: 'white',
			}),
			valueContainer: base => ({
				...base,
				padding: '0px 6px',
			}),
			input: base => ({
				...base,
				margin: 0,
				padding: 0,
				backgroundColor: 'white',
			}),
		};


		return (
			<div className="left side-menu">
				<div className="sidebar-inner slimscrollleft">
					<div id="sidebar-menu">

						<li className="menu-title" style={{ paddingBottom: '0px !important' }}>
							Project
							<span class="pull-right">
								<i class="fa fa-plus" />
							</span>
						</li>
						<UncontrolledDropdown size="sm" style={{ paddingTop: '0px !important', paddingLeft:20, backgroundColor:"white" }}>
							<DropdownToggle caret style={{backgroundColor:"white", border:"none", padding:0}}>
								<button
									type="button"
									class="btn btn-outline-secondary btn-rounded waves-effect"
									style={{ textAlign: 'left', width: 200 }}
								>
									<i class="fa fa-folder-open" /> ALL PROJECTS
							</button>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem>Cenove ponuky</DropdownItem>
                                <DropdownItem>hotline@lansystems.sk</DropdownItem>
								<DropdownItem>Orchestra</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>

						<Nav tabs>
							<NavItem>
								<NavLink
									className={classnames({ active: this.state.activeTab === '1' })}
									onClick={() => { this.toggle('1'); }}
								>
									FILTERS
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classnames({ active: this.state.activeTab === '2' })}
									onClick={() => { this.toggle('2'); }}
								>
									EDIT
								</NavLink>
							</NavItem>
						</Nav>
						<TabContent activeTab={this.state.activeTab} style={{ padding: 20 }}>
							<TabPane tabId="1">
								<Nav vertical>
									<NavItem>
										<Link className="" to={{ pathname: `/demoHelpdesk/taskList` }}>
											Riešiť
								</Link>
									</NavItem>
									<NavItem>
										<NavLink href="#">Odlozene</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="#">Zadane</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="#">All task</NavLink>
									</NavItem>
								</Nav>
							</TabPane>
							<TabPane tabId="2">
								<Nav vertical>
									<NavItem>
										<div class="btn-group mb-2">
											<button type="button" class="btn btn-light btn-xs">Apply</button>
											<button type="button" class="btn btn-light btn-xs">Save</button>
											<button type="button" class="btn btn-light btn-xs">Reset</button>
											<button type="button" class="btn btn-light btn-xs">Delete</button>
										</div>
									</NavItem>

									<NavItem>
										<div class="form-group mb-3">
											<label for="example-input-small">Status</label>
											<Select options={statuses} styles={selectStyle} />
										</div>
									</NavItem>
									<NavItem>
										<div class="form-group mb-3">
											<label for="example-input-small">Zadal</label>
											<Select options={statuses} styles={selectStyle} />
										</div>
									</NavItem>
									<NavItem>
										<div class="form-group mb-3">
											<label for="example-input-small">Firma</label>
											<Select options={statuses} styles={selectStyle} />
										</div>
									</NavItem>
									<NavItem>
										<div class="form-group mb-3">
											<label for="example-input-small">Riesi</label>
											<Select options={statuses} styles={selectStyle} />
										</div>
									</NavItem>
									<NavItem>
										<div class="form-group mb-3">
											<label for="example-input-small">Status date</label>
											<div class="row">
												<div class="col-sm-6">
													<input type="text" id="datetime-datepicker" class="form-control form-control-sm active" placeholder="Od" readonly="readonly" />
												</div>

												<div class="col-sm-6">
													<input type="text" id="datetime-datepicker" class="form-control form-control-sm active" placeholder="Do" readonly="readonly" />
												</div>
											</div>
										</div>
									</NavItem>
									<NavItem>
										<div class="form-group mb-3">
											<label for="example-input-small">Typ práce</label>
											<Select options={statuses} styles={selectStyle} />
										</div>
									</NavItem>
								</Nav>
							</TabPane>
						</TabContent>


						{/* 
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
			</div >
		);
	}
}
