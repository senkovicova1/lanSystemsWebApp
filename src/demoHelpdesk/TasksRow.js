import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class TasksRow2 extends Component {
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
			<div>
				<div className="row">
					<div class="col-md-12">
						<div class="card-box">
							<div class="table-responsive">
								<table class="table table-hover mails m-0">
									<thead>
										<tr>
											<th>
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="action-checkbox" type="checkbox" />
													<label for="action-checkbox" />
												</div>
											</th>
											<th>ID</th>
											<th>Status</th>
											<th style={{ width: '40%' }}>Name</th>
											<th>Zadal</th>
											<th>Firma</th>
											<th>Riesi</th>
											<th>Created</th>
											<th>Deadline</th>
										</tr>
									</thead>

									<tbody>
										<tr class="">
											<td>
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="checkbox2" type="checkbox" checked="" />
													<label for="checkbox2" />
												</div>
											</td>
											<td>152</td>
											<td>New</td>
											<td>
												{' '}
												<Link className="" to={{ pathname: `/demoHelpdesk/taskTop` }}>
													Nefunguje klavesnica{' '}
												</Link>
											</td>
											<td>Branislav Šusta</td>
											<td>LAN Systems s.r.o.</td>
											<td>Patrik Patoprsty</td>
											<td>15.04 2.10.2018</td>
											<td>15.05 2.11.2018</td>
										</tr>
										<tr class="">
											<td>
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="checkbox2" type="checkbox" checked="" />
													<label for="checkbox2" />
												</div>
											</td>
											<td>152</td>
											<td>New</td>
											<td>
												{' '}
												<Link className="" to={{ pathname: `/demoHelpdesk/taskSide` }}>
													Nefunguje klavesnica{' '}
												</Link>
											</td>
											<td>Branislav Šusta</td>
											<td>LAN Systems s.r.o.</td>
											<td>Patrik Patoprsty</td>
											<td>15.04 2.10.2018</td>
											<td>15.05 2.11.2018</td>
										</tr>
										<tr class="">
											<td>
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="checkbox2" type="checkbox" checked="" />
													<label for="checkbox2" />
												</div>
											</td>
											<td>152</td>
											<td>New</td>
											<td>
												{' '}
												<Link className="" to={{ pathname: `/demoHelpdesk/taskSide2` }}>
													Task edit side v2{' '}
												</Link>
											</td>
											<td>Branislav Šusta</td>
											<td>LAN Systems s.r.o.</td>
											<td>Patrik Patoprsty</td>
											<td>15.04 2.10.2018</td>
											<td>15.05 2.11.2018</td>
										</tr>
										<tr class="">
											<td>
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="checkbox2" type="checkbox" checked="" />
													<label for="checkbox2" />
												</div>
											</td>
											<td>152</td>
											<td>New</td>
											<td>
												{' '}
												<Link className="" to={{ pathname: `/demoHelpdesk/taskSide3` }}>
													Task edit side v3{' '}
												</Link>
											</td>
											<td>Branislav Šusta</td>
											<td>LAN Systems s.r.o.</td>
											<td>Patrik Patoprsty</td>
											<td>15.04 2.10.2018</td>
											<td>15.05 2.11.2018</td>
										</tr>
										<tr class="">
											<td>
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="checkbox2" type="checkbox" checked="" />
													<label for="checkbox2" />
												</div>
											</td>
											<td>152</td>
											<td>New</td>
											<td>
												{' '}
												<Link className="" to={{ pathname: `/demoHelpdesk/taskTop2` }}>
													Task edit top v2{' '}
												</Link>
											</td>
											<td>Branislav Šusta</td>
											<td>LAN Systems s.r.o.</td>
											<td>Patrik Patoprsty</td>
											<td>15.04 2.10.2018</td>
											<td>15.05 2.11.2018</td>
										</tr>
										<tr class="">
											<td>
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="checkbox2" type="checkbox" checked="" />
													<label for="checkbox2" />
												</div>
											</td>
											<td>152</td>
											<td>New</td>
											<td>
												{' '}
												<Link className="" to={{ pathname: `/demoHelpdesk/taskTop3` }}>
													Task edit top v3 - label inline{' '}
												</Link>
											</td>
											<td>Branislav Šusta</td>
											<td>LAN Systems s.r.o.</td>
											<td>Patrik Patoprsty</td>
											<td>15.04 2.10.2018</td>
											<td>15.05 2.11.2018</td>
										</tr>
										<tr class="">
											<td>
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="checkbox2" type="checkbox" checked="" />
													<label for="checkbox2" />
												</div>
											</td>
											<td>152</td>
											<td>New</td>
											<td>
												{' '}
												<Link className="" to={{ pathname: `/demoHelpdesk/taskSideLeft` }}>
													Taskedit side left{' '}
												</Link>
											</td>
											<td>Branislav Šusta</td>
											<td>LAN Systems s.r.o.</td>
											<td>Patrik Patoprsty</td>
											<td>15.04 2.10.2018</td>
											<td>15.05 2.11.2018</td>
										</tr>
										<tr class="">
											<td>
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="checkbox2" type="checkbox" checked="" />
													<label for="checkbox2" />
												</div>
											</td>
											<td>152</td>
											<td>New</td>
											<td>
												{' '}
												<Link className="" to={{ pathname: `/demoHelpdesk/taskTop4` }}>
													Taskedit top dva stlpce
												</Link>
											</td>
											<td>Branislav Šusta</td>
											<td>LAN Systems s.r.o.</td>
											<td>Patrik Patoprsty</td>
											<td>15.04 2.10.2018</td>
											<td>15.05 2.11.2018</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
