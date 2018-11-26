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

export default class Items extends Component {
	render() {
		return (
			<div class="">
				<div class="row">
					<div class="col-md-12">
						<div class="table-responsive">
							<table class="table table-centered table-borderless table-hover mb-0">
								<thead class="thead-light">
									<tr>
										<th  style={tableStyle} width="70%">Fakturovatelne položky</th>
										<th style={tableStyle}>Quantity</th>
										<th style={tableStyle}>Unit Cost</th>
										<th style={tableStyle}>Total</th>
										<th style={tableStyleCenterNoBorder}>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td style={tableStyle}>LCD</td>
										<td style={tableStyle}>1</td>
										<td style={tableStyle}>$380</td>
										<td style={tableStyle}>$380</td>
										<td style={tableStyleCenter}>
											<button class="btn btn-link waves-effect">
												<i class="fa fa-times" />
											</button>
										</td>
									</tr>
									<tr>
										<td style={tableStyle}>Mobile</td>
										<td style={tableStyle}>5</td>
										<td style={tableStyle}>$50</td>
										<td style={tableStyle}>$250</td>
										<td style={tableStyleCenterNoBorder}>
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
												placeholder="Pocet"
											/>
										</td>
										<td style={tableStyle}>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder="Cena/ks"
											/>
										</td>
										<td style={tableStyle} />
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
								<p class="text-right m-b-0">
									<b>Sub-total:</b> 2930.00
								</p>
								<p class="text-right m-b-0">VAT: 20%</p>
								<p class="text-right m-b-0">USD 2930.00</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
