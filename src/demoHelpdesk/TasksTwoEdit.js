import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import Comments from './components/comments.js';
import Subtasks from './components/subtasks.js';
import Items from './components/items.js';
import Select from 'react-select';

const tableStyle = {
	border: 'none',
};

export default class TasksTwoEdit extends Component {
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

		const selectStyle = {
			control: styles => ({ ...styles, backgroundColor: 'white' }),
		};
		return (
			<div>
				<div className="row" style={{}}>
					<div className="col-lg-12">
						<div class="card-box" style={{ maxWidth: 1284, margin: 'auto', background: '#F9F9F9' }}>
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
								<div className="col-lg-12 p-0">
									<div className="col-lg-6">
										<div class="m-t-20">
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Status</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Projekt</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Zadal</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Firma</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Riesi</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Typ prace</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div class="m-t-20">
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Pripomienka</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Deadline</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Opakovanie</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Pausal/Projekt</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Pausal</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
											<div class="form-group m-b-10 row">
												<label className="col-4 col-form-label">Mimo pracovných hodín</label>
												<div className="col-8">
													<Select options={statuses} styles={selectStyle} />
												</div>
											</div>
										</div>
									</div>
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
