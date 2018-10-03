import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import Comments from './components/comments.js';
import Subtasks from './components/subtasks.js';

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
									<input type="radio" name="options" id="option1" autocomplete="off" checked />
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
									<hr/>
								</div>
								<div className="col-lg-12">
								<strong>Tagy: </strong>
									<span class="label label-info m-r-5">Mimo pracovných hodín</span>
									<span class="label label-success m-r-5">Telefonovať</span>
								</div>

								<div className="col-lg-4">
									<div class="m-t-20">
										<p>
											<strong>Status: </strong>
											<span class="label label-pink">Opakovanie</span>
										</p>
										<p class="m-t-10">
											<strong>Projekt: </strong>
											hotline@lansystems.sk{' '}
										</p>
										<p class="m-t-10">
											<strong>Typ práce: </strong>
											none{' '}
										</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div class="m-t-20">
										<p>
											<strong>Zadal: </strong>
											hotline@lansystems.sk
										</p>
										<p class="m-t-10">
											<strong>Firma: </strong>
											LAN Systems s.r.o.{' '}
										</p>
										<p class="m-t-10">
											<strong>Riesi: </strong>
											hotline@lansystems.sk
										</p>
									</div>
								</div>

								<div className="col-lg-4">
									<div class="m-t-20">
										<p>
											<strong>Pripomienka: </strong>
											none
										</p>
										<p class="m-t-10">
											<strong>Deadline: </strong>
											hotline@lansystems.sk{' '}
										</p>
										<p class="m-t-10">
											<strong>Opakovanie: </strong>
											none{' '}
										</p>

									</div>
								</div>
							</div>

							<label class="">Popis</label>
							<textarea class="form-control" rows="2" />
							<Subtasks />
							<Comments />
						</div>
					</div>
				</div>
			</div>
		);
	}
}