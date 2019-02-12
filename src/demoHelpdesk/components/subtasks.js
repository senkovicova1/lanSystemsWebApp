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
							<table class="table table-centered table-borderless table-hover mb-0">
								<thead class="thead-light">
									<tr>
										<th style={tableStyle} width="5%">
											<input type="checkbox" />
										</th>
										<th style={tableStyle} width="50%">Sluzby</th>
										<th style={tableStyle}>Typ</th>
										<th style={tableStyle}>Cena/ks</th>
										<th style={tableStyle}>Ks</th>
										<th style={tableStyle}>Zlava</th>
										<th style={tableStyle}>Cena</th>
										<th style={tableStyleCenterNoBorder}>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td style={tableStyle}>
											<input type="checkbox" />
										</td>
										<td style={tableStyle}>
											<div style={{ background: '#dcf4f9', borderRadius: '5px', padding: 5 }}>
												Subtask 1 - treba zarovnať nalavo + drag&drop zmena poradia
											</div>
										</td>
										<td style={tableStyle}>
											Servis IT
										</td>
										<td style={tableStyle}>
											22,90
										</td>
										<td style={tableStyle}>
											5
										</td>
										<td style={tableStyle}>
											0 %
										</td>
										<td style={tableStyle}>
											22.9
										</td>
										<td style={tableStyleCenter}>
											<button class="btn btn-link waves-effect">
												<i class="fa fa-times" />
											</button>
										</td>
									</tr>
									<tr>
										<td style={tableStyle}>
										</td>
										<td style={tableStyle}>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder=""
												style={{ height: 30 }}
											/>
										</td>
										<td style={tableStyle}>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder=""
												style={{ height: 30 }}
											/>
										</td>
										<td style={tableStyle}>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder=""
												style={{ height: 30 }}
											/>
										</td>
										<td style={tableStyle}>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder=""
												style={{ height: 30 }}
											/>
										</td>
										<td style={tableStyle}>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder=""
												style={{ height: 30 }}
											/>
										</td>
										<td style={tableStyle}>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder=""
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
						<div class="row justify-content-end">
							<div class="col-md-3">
								<p class="text-right">
									<b>Sub-total:</b> 2930.00
								</p>

							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}
