import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import Select from 'react-select';

export default class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openAddStatusModal: false,
			openAddTaskModal: false,
			isColumn: false,
			search: '',
			taskListType: 'option2',
			filterView: 'false',
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
		}
		return (
			<div className="card" style={{ height: '100%', background: 'white' }}>
				<div class="button-list" style={{ margin: 10 }} >
					<button type="button" class="btn btn-primary waves-effect waves-light btn-sm">Apply</button>
					<button type="button" class="btn btn-primary waves-effect waves-light btn-sm">Save</button>
					<button type="button" class="btn btn-primary waves-effect waves-light btn-sm">Delete</button>
					<button type="button" class="btn btn-primary waves-effect waves-light btn-sm">Reset</button>
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<label>Status</label>
					<Select options={statuses} styles={selectStyle} />
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<label>Vytvoril</label>
					<Select options={statuses} styles={selectStyle} />
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<label>Ziadatel</label>
					<Select options={statuses} styles={selectStyle} />
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<label>Firma</label>
					<Select options={statuses} styles={selectStyle} />
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<label>Riesitel</label>
					<Select options={statuses} styles={selectStyle} />
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<label>Typ práce</label>
					<Select options={statuses} styles={selectStyle} />
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<label>Tag</label>
					<Select options={statuses} styles={selectStyle} />
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<div class="row">
						<div class="col-xl-6">
							<label>Vytvorene</label>
							<input
								type="text"
								class="form-control mb-2"
								id="inlineFormInput"
								placeholder="Od"
							/>

						</div>
						<div class="col-xl-6">
							<label></label>
							<input
								type="text"
								class="form-control mb-2"
								id="inlineFormInput"
								placeholder="Od"
							/>
						</div>
					</div>
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<div class="row">
						<div class="col-xl-6">
							<label>Pripomienka</label>
							<input
								type="text"
								class="form-control mb-2"
								id="inlineFormInput"
								placeholder="Od"
							/>

						</div>
						<div class="col-xl-6">
							<label></label>
							<input
								type="text"
								class="form-control mb-2"
								id="inlineFormInput"
								placeholder="Od"
							/>
						</div>
					</div>
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<div class="row">
						<div class="col-xl-6">
							<label>Deadline</label>
							<input
								type="text"
								class="form-control mb-2"
								id="inlineFormInput"
								placeholder="Od"
							/>

						</div>
						<div class="col-xl-6">
							<label></label>
							<input
								type="text"
								class="form-control mb-2"
								id="inlineFormInput"
								placeholder="Od"
							/>
						</div>
					</div>
				</div>
				<div class="form-group" style={{ margin: 10 }} >
					<div class="row">
						<div class="col-xl-6">
							<label>Status date</label>
							<input
								type="text"
								class="form-control mb-2"
								id="inlineFormInput"
								placeholder="Od"
							/>

						</div>
						<div class="col-xl-6">
							<label></label>
							<input
								type="text"
								class="form-control mb-2"
								id="inlineFormInput"
								placeholder="Od"
							/>
						</div>
					</div>
				</div>
			</div >
		);
	}
}
