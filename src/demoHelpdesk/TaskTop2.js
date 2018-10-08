import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Comments from './components/comments.js';
import Subtasks from './components/subtasks.js';

export default class TaskTop2 extends Component {
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

		const selectStyle ={
			control: styles => ({ ...styles, backgroundColor: 'white', maxHeight:30}),
		}

		return (
			<div className="content-page">
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<div class="card-box">
									<div class="row">
										<div className="col-lg-12">
											<h1># 142 Nefunguje klavesnica</h1>
											<hr />
										</div>
										<div className="col-lg-1">
											<strong>Tagy: </strong>
											<span class="label label-info m-r-5">Mimo pracovných hodín</span>
											<span class="label label-success m-r-5">Telefonovať</span>
										</div>
										<div className="col-lg-12 p-0">
										<div className="col-lg-4">
											<div class="m-t-20">
												<div class="form-group m-b-10">
													<label>Status</label>
													<Select options={statuses} styles={selectStyle} />
												</div>
												<div class="form-group m-b-10">
													<label>Projekt</label>
													<Select options={statuses} styles={selectStyle} />
												</div>
												<div class="form-group m-b-10">
													<label>Typ prace</label>
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
										</div>
										<div className="col-lg-4">
											<div class="m-t-20">
												<div class="form-group m-b-10">
													<label>Zadal</label>
													<Select options={statuses} styles={selectStyle} />
												</div>
												<div class="form-group m-b-10">
													<label>Firma</label>
													<Select options={statuses} styles={selectStyle} />
												</div>
												<div class="form-group m-b-10">
													<label>Riesi</label>
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
										</div>

										<div className="col-lg-4">
											<div class="m-t-20">
												<div class="form-group m-b-10">
													<label>Pripomienka</label>
													<Select options={statuses} styles={selectStyle} />
												</div>
												<div class="form-group m-b-10">
													<label>Deadline</label>
													<Select options={statuses} styles={selectStyle} />
												</div>
												<div class="form-group m-b-10">
													<label>Opakovanie</label>
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
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
				</div>
			</div>
		);
	}
}
