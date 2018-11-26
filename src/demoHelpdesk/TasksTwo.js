import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import Comments from './components/comments.js';
import Subtasks from './components/subtasks.js';
import Items from './components/items.js';

const tableStyle = {
	border: 'none',
};


export default class TasksRow extends Component {
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
					<div className="col-lg-4">
						<ul className="sortable-list taskList list-unstyled" id="upcoming">
							<li className="task-new" id="task1">
								<div className="checkbox checkbox-primary">
									<input type="checkbox" aria-label="Single checkbox Two" />
									<label>#142 Nefunguje klavesnica</label>
								</div>
								<span class="label label-info m-r-5">Tag 1</span>
								<span class="label label-success m-r-5">Tag 2</span>
								<div className="m-t-5">
									<p className="pull-right m-b-0">
										<i className="fa fa-clock-o" /> <span title="15/06/2016 12:56">15/06/2016</span>
									</p>
									<p className="text-muted m-b-0 font-13">
										<span className="font-bold">Zadal: Petey Cruiser</span>
									</p>
									<p className="text-muted m-b-10 font-13">
										<span className="font-bold">Riesi: Petey Cruiser</span>
									</p>
								</div>
							</li>
						</ul>

						<ul className="sortable-list taskList list-unstyled" id="upcoming">
							<li className="task-new" id="task1">
								<div className="checkbox checkbox-primary">
									<input type="checkbox" aria-label="Single checkbox Two" />
									<label>#142 Nefunguje klavesnica</label>
								</div>
								<span class="label label-info m-r-5">Tag 1</span>
								<span class="label label-success m-r-5">Tag 2</span>
								<div className="m-t-5">
									<p className="pull-right m-b-0">
										<i className="fa fa-clock-o" /> <span title="15/06/2016 12:56">15/06/2016</span>
									</p>
									<p className="text-muted m-b-0 font-13">
										<span className="font-bold">Zadal: Petey Cruiser</span>
									</p>
									<p className="text-muted m-b-10 font-13">
										<span className="font-bold">Riesi: Petey Cruiser</span>
									</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="col-lg-8">
						<div class="card-box">
							<div class="row">
								<div className="col-lg-12">
									<h1># 142 Nefunguje klavesnica</h1>
									<hr />
								</div>
								<div className="col-lg-12">
									<strong>Tagy: </strong>
									<span class="label label-info m-r-5">Mimo pracovných hodín</span>
									<span class="label label-success m-r-5">Telefonovať</span>
								</div>
								<div className="col-lg-12 m-t-20">
									<table class="table table-borderless">
										<tbody>
											<tr>
												<td style={tableStyle}>
													<strong>Status: </strong>
												</td>
												<td style={tableStyle}>
													<span class="label label-pink">Opakovanie</span>
												</td>
												<td style={tableStyle}>
													<strong>Pripomienka: </strong>
												</td>
												<td style={tableStyle}>12:00 24.12.2018</td>
											</tr>
											<tr>
												<td style={tableStyle}>
													<strong>Projekt: </strong>
												</td>
												<td style={tableStyle}>hotline@lansystems.sk</td>
												<td style={tableStyle}>
													{' '}
													<strong>Deadline: </strong>
												</td>
												<td style={tableStyle}>12:00 24.12.2018</td>
											</tr>
											<tr>
												<td style={tableStyle}>
													{' '}
													<strong>Zadal: </strong>
												</td>
												<td style={tableStyle}>Branislav Šusta</td>
												<td style={tableStyle}>
													{' '}
													<strong>Opakovanie: </strong>
												</td>
												<td style={tableStyle}>None</td>
											</tr>
											<tr>
												<td style={tableStyle}>
													{' '}
													<strong>Firma </strong>
												</td>
												<td style={tableStyle}>None</td>

												<td style={tableStyle}>
													<strong>Typ práce: </strong>
												</td>
												<td style={tableStyle}>Servis IT</td>
											</tr>
											<tr>
												<td style={tableStyle}>
													{' '}
													<strong>Riesi </strong>
												</td>
												<td style={tableStyle}>None</td>

												<td style={tableStyle}>
													<strong>Pausál/Projekt </strong>
												</td>
												<td style={tableStyle}>Pausal</td>
											</tr>
											<tr >
												<td style={tableStyle}>
													{' '}
													<strong>Práca mimo pracovných hodín</strong>
												</td>
												<td style={tableStyle}>Nie</td>
												<td style={tableStyle}/>
												<td style={tableStyle} />
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<label class="">Popis</label>
							<textarea class="form-control" rows="2" />
							<Subtasks />
							<Items />
							<Comments />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
