import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Comments from './components/comments.js';
import Subtasks from './components/subtasks.js';
import Items from './components/items.js';

const tableStyle = {
	paddingTop: '0',
	paddingBottom: '0',
	border: 'none',
};

const tableStyleCenter = {
	textAlign: 'center',
};

const tableStyleCenterNoBorder = {
	textAlign: 'center',
	border: 'none',
};

export default class TaskTopChiptask extends Component {
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
			<div>
				<div className="row" style={{ marginLeft: 240 }}>
					<div className="col-lg-12">
						<div
							class="card-box"
							style={{
								maxWidth: 950,
								margin: 'auto',
								background: '#F9F9F9',
								marginTop: 50,
								paddingTop: 0,
							}}
						>
							<div class="d-flex flex-row">
								<div class="p-2 align-self-center" style={{}}>
									{' '}
									<button type="button" class="btn btn-link waves-effect" style={{ paddingLeft: 0 }}>
										<i
											class="fas fa-arrow-left"
											style={{
												color: '#4a81d4',
												fontSize: '1.2em',
											}}
										/>
									</button>
								</div>
								<div class="p-2">
									<h1># 143 Editácia tasku ako na chiptasku</h1>
								</div>
								<div class="ml-auto p-2 align-self-center">
									{' '}
									<button type="button" class="btn btn-link waves-effect">
										<i
											class="fas fa-print"
											style={{
												color: '#4a81d4',
												fontSize: '1.2em',
											}}
										/>
									</button>
								</div>
							</div>

							<div class="row">
								<div className="col-lg-12">
									<strong>Tagy: </strong>
									<span class="label label-info m-r-5">Mimo pracovných hodín</span>
									<span class="label label-success m-r-5">Telefonovať</span>
								</div>
								<div className="col-lg-12 p-0">
									<div class="">
										<table class="table table-centered mb-3 mt-3" style={{}}>
											<tbody>
												<tr>
													<td style={tableStyle} width="50%">
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">Status</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">Projekt</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">Zadal</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">Firma</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">Riesi</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">Typ prace</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">Pripomienka</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">Deadline</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">Opakovanie</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">
																Pausal/Projekt
															</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">Hodiny</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
													<td style={tableStyle}>
														<div class="form-group row mb-0">
															<label className="col-4 col-form-label">
																Po pracovnej dobe
															</label>
															<div className="col-8">
																<Select options={statuses} styles={selectStyle} />
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<label class="">Popis</label>
							<textarea class="form-control" rows="1" />

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