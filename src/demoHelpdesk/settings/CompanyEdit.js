import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CompanyEdit extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="content-page">
				<div className="content">
					<div className="container-fluid">
						<h4 className="page-title m-b-20">Company Edit</h4>
						<div className="card-box">
							<div class="form-group row">
								<label class="col-2 col-form-label">Active</label>
								<div class="col-10">
									<div class="checkbox checkbox-primary checkbox-single m-r-15">
										<input id="action-checkbox" type="checkbox" />
										<label for="action-checkbox" />
									</div>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-2 col-form-label">Company name</label>
								<div class="col-10">
									<input type="text" class="form-control" value="Some text value..." />
								</div>
							</div>
							<div class="form-group row">
								<label class="col-2 col-form-label">ICO</label>
								<div class="col-10">
									<input type="text" class="form-control" value="Some text value..." />
								</div>
							</div>
							<div class="form-group row">
								<label class="col-2 col-form-label">DIC</label>
								<div class="col-10">
									<input type="text" class="form-control" value="Some text value..." />
								</div>
							</div>
							<div class="form-group row">
								<label class="col-2 col-form-label">IC DPH</label>
								<div class="col-10">
									<input type="text" class="form-control" value="Some text value..." />
								</div>
							</div>
							<div class="form-group row">
								<label class="col-2 col-form-label">Ulica</label>
								<div class="col-10">
									<input type="text" class="form-control" value="Some text value..." />
								</div>
							</div>
							<div class="form-group row">
								<label class="col-2 col-form-label">Mesto</label>
								<div class="col-10">
									<input type="text" class="form-control" value="Some text value..." />
								</div>
							</div>
							<div class="form-group row">
								<label class="col-2 col-form-label">PSC</label>
								<div class="col-10">
									<input type="text" class="form-control" value="Some text value..." />
								</div>
							</div>
							<div class="form-group row">
								<label class="col-2 col-form-label">Krajina</label>
								<div class="col-10">
									<input type="text" class="form-control" value="Some text value..." />
								</div>
							</div>
							<div class="d-flex p-2 bd-highlight p-l-0">
								<div class="p-2 bd-highlight p-l-0">
									<button
										onClick={() => this.props.history.goBack()}
										class="btn btn-danger waves-effect waves-light btn-sm"
									>
										Cancel
									</button>
								</div>
								<div class="p-2 bd-highlight">
									<button
										onClick={() => this.props.history.goBack()}
										class="btn btn-success waves-effect waves-light btn-sm"
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
