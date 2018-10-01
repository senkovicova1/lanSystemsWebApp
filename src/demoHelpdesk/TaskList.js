import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import avatar1 from './images/users/avatar-1.jpg';

export default class TaskListContainer extends Component {
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
			<div className="content-page">
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12">
								<h4 className="page-title">All Tasks</h4>
							</div>
						</div>

						<div className="row m-t-20">
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
							<div className="col-lg-3">
								<div className="task-box">
									<div className="task-box-heading" style={{ backgroundColor: '#1976d2' }}>
										<h4 className="text-white header-title m-t-0">New</h4>
									</div>
									<div className="task-box-list">
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
														<i className="fa fa-clock-o" />{' '}
														<span title="15/06/2016 12:56">15/06/2016</span>
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
								</div>
							</div>

							<div className="col-lg-3">
								<div className="task-box">
									<div className="task-box-heading" style={{ backgroundColor: '#32CD32' }}>
										<h4 className="text-white header-title m-t-0">Open</h4>
									</div>
									<div className="task-box-list">
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
														<i className="fa fa-clock-o" />{' '}
														<span title="15/06/2016 12:56">15/06/2016</span>
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
								</div>
							</div>

							<div className="col-lg-3">
								<div className="task-box">
									<div className="task-box-heading" style={{ backgroundColor: '#F5A623' }}>
										<h4 className="text-white header-title m-t-0">Pending</h4>
									</div>
									<div className="task-box-list">
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
														<i className="fa fa-clock-o" />{' '}
														<span title="15/06/2016 12:56">15/06/2016</span>
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
								</div>
							</div>

							<div className="col-lg-3">
								<div className="task-box">
									<div className="task-box-heading" style={{ backgroundColor: '#A9A9A9' }}>
										<h4 className="text-white header-title m-t-0">Closed</h4>
									</div>
									<div className="task-box-list">
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
														<i className="fa fa-clock-o" />{' '}
														<span title="15/06/2016 12:56">15/06/2016</span>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
