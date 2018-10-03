import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';


export default class TasksTwo extends Component {
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
				<div className="row m-t-20 m-b-20">
					<div class="col-md-4">
						<form role="form">
							<div class="form-group contact-search m-b-10">
								<input type="text" id="search" class="form-control" placeholder="Search..." />
								<button type="submit" class="btn btn-white">
									<i class="fa fa-search" />
								</button>
							</div>
						</form>
					</div>

					<div class="col-md-8">
						<div class="h5 m-0 pull-right">
							<span class="font-16 m-r-10">Sort By:</span>
							<div class="btn-group btn-group-toggle" data-toggle="buttons">
								<label class="btn btn-secondary active">
									<input
										type="radio"
										name="options"
										id="option1"
										autocomplete="off"
										checked
									/>
									Name
										</label>
								<label class="btn btn-secondary">
									<input type="radio" name="options" id="option2" autocomplete="off" /> Created date
										</label>
								<label class="btn btn-secondary">
									<input type="radio" name="options" id="option3" autocomplete="off" /> Deadline
										</label>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12" style={{ paddingLeft: 30 }}>

						<div className="checkbox form-check-inline" style={{ marginRight: 30 }}>
							<input id="checkbox0" type="checkbox" />
							<label for="checkbox0">NEW</label>
						</div>
						<div className="checkbox form-check-inline" style={{ marginRight: 30 }}>
							<input id="checkbox0" type="checkbox" />
							<label for="checkbox0">OPEN</label>
						</div>
						<div className="checkbox form-check-inline" style={{ marginRight: 30 }}>
							<input id="checkbox0" type="checkbox" />
							<label for="checkbox0">PENDING</label>
						</div>
						<div className="checkbox form-check-inline" style={{ marginRight: 30 }}>
							<input id="checkbox0" type="checkbox" />
							<label for="checkbox0">CLOSED</label>
						</div>

					</div>
				</div>


				<div className="row">
					<div class="col-md-12">
						<div class="card-box">
							<div class="table-responsive">
								<table class="table table-hover mails m-0">
									<thead>
										<tr>
											<th >
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="action-checkbox" type="checkbox" />
													<label for="action-checkbox"></label>
												</div>

											</th>
											<th>ID</th>
											<th>Status</th>
											<th style={{ width: "40%" }}>Name</th>
											<th>Zadal</th>
											<th>Firma</th>
											<th>Riesi</th>
											<th>Created</th>
											<th>Deadline</th>
										</tr>
									</thead>

									<tbody>
										<tr class="active">
											<td>
												<div class="checkbox checkbox-primary checkbox-single m-r-15">
													<input id="checkbox2" type="checkbox" checked="" />
													<label for="checkbox2"></label>
												</div>
											</td>
											<td>152</td>
											<td>New</td>
											<td>Nefunguje klavesnica</td>
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
			</div >

		);
	}
}