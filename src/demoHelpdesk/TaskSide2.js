import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Comments from './components/comments.js';
import Subtasks from './components/subtasks.js';

export default class TaskSide extends Component {
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
		const statuses = [
			{ value: 'new', label: 'New' },
			{ value: 'open', label: 'Open' },
			{ value: 'pending', label: 'Closed' },
		];

		return (
			<div className="content-page">
				<div className="content">
					<div className="container-fluid">
						<div className="row m-b-20">
							<div className="col-lg-8">
								<div className="button-list">
									<button class="btn btn-icon waves-effect btn-default waves-light">
										{' '}
										<i class="fa fa-arrow-left" />{' '}
									</button>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-8">
								<div class="card-box">
									<h1># 142 Nefunguje klavesnica</h1>
									<hr />

									<div className="m-b-20">
										<strong>Tagy: </strong>
										<span class="label label-info m-r-5">Mimo pracovných hodín</span>
										<span class="label label-success m-r-5">Telefonovať</span>
									</div>
									<label class="">Popis</label>
									<textarea class="form-control" rows="2" />
									<Subtasks />
									<Comments />
								</div>
							</div>
							<div className="col-lg-4">
								<div class="card-box">
									<div class="form-group m-b-10">
										<label>Status</label>
										<Select options={statuses} />
									</div>
									<div class="form-group m-b-10">
										<label>Projekt</label>
										<Select options={statuses} />
									</div>
									<div class="form-group m-b-10">
										<label>Zadal</label>
										<Select options={statuses} />
									</div>
									<div class="form-group m-b-10">
										<label>Firma</label>
										<Select options={statuses} />
									</div>
									<div class="form-group m-b-10">
										<label>Riesi</label>
										<Select options={statuses} />
									</div>
									<div class="form-group m-b-10">
										<label>Pripomienka</label>
										<Select options={statuses} />
									</div>
									<div class="form-group m-b-10">
										<label>Deadline </label>
										<Select options={statuses} />
									</div>
									<div class="form-group m-b-10">
										<label>Opakovanie </label>
										<Select options={statuses} />
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
