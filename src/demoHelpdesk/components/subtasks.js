import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';


const tableStyle = {
	border: "none"
  };

export default class Subtasks extends Component {
	render() {
		return (
			<div class="">
				<div class="row">
					<div class="col-md-12">
						<div class="table-responsive">
							<table class="table" style={tableStyle}>
								<thead>
									<tr>
										<th style={tableStyle} width="70%">Práce</th>
										<th style={tableStyle}>Hodiny</th>
										<th style={tableStyle} />
									</tr>
								</thead>
								<tbody>
									<tr>
										<td style={tableStyle}>Oprava klavesnice</td>
										<td style={tableStyle}>1</td>
										<td style={tableStyle}>
											<button class="btn btn-icon waves-effect waves-light btn-primary">
												{' '}
												<i class="fa fa-close" />{' '}
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
										<td style={tableStyle}>
											<button class="btn btn-icon waves-effect waves-light btn-primary">
												{' '}
												<i class="fa fa-plus" />{' '}
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="row justify-content-end">
							<div class="col-md-3">
								<p class="text-right m-b-0">
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
