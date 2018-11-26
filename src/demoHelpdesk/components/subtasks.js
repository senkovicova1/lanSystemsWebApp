import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const tableStyle = {
	border: 'none',
};

const tableStyleCenter = {
	textAlign: 'center',
};

const tableStyleCenterNoBorder = {
	textAlign: 'center',
	border: 'none',
};

export default class Subtasks extends Component {
	render() {
		return (
			<div class="m-t-30">
				<div class="row">
					<div class="col-md-12">
						<div class="table-responsive">
							<table class="table table-centered table-borderless table-hover mb-0">
								<thead class="thead-light">
									<tr>
										<th style={tableStyle} width="70%">Práce</th>
										<th style={tableStyle} >Hodiny</th>
										<th style={tableStyleCenterNoBorder}>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td style={tableStyle}>Oprava klavesnice</td>
										<td style={tableStyle}>1</td>
										<td style={tableStyleCenter}>
											<button class="btn btn-link waves-effect">
												<i class="fa fa-times" />
											</button>
										</td>
									</tr>
									<tr>
										<td style={tableStyle}>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder="Name"
											/>
										</td>
										<td style={tableStyle}>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder=""
											/>
										</td>
										<td style={tableStyleCenterNoBorder}>
											<button class="btn btn-link waves-effect">
												<i class="fa fa-plus" />
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="row justify-content-end">
							<div class="col-md-3">
								<p class="text-right m-b-20">
									<b>Spolu:</b> 1 hodiny
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
