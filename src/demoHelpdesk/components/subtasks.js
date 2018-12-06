import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const tableStyle = {
	border: 'none',
};

const tableStyleCenter = {
	textAlign: 'right',
	border: 'none',
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
							<table class="table table-centered table-borderless mb-0">
								<thead class="">
									<tr>
										<th style={tableStyle} width="95%">
											Podúlohy
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td style={tableStyle}>
											<div style={{ background: '#dcf4f9', borderRadius: '5px', padding:5 }}>
												Subtask 1 - treba zarovnať nalavo + drag&drop zmena poradia
											</div>
										</td>
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
												style={{ height: 30 }}
											/>
										</td>
										<td style={tableStyleCenter}>
											<button class="btn btn-link waves-effect">
												<i class="fa fa-plus" />
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
