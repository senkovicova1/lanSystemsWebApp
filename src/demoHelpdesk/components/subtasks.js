import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export default class Subtasks extends Component {
	render() {
		return (
			<div class="">
				<div class="row">
					<div class="col-md-12">
						<div class="table-responsive">
							<table class="table m-t-30">
								<thead>
									<tr>
										<th>#</th>
										<th>Práce</th>
										<th>Od</th>
										<th>Do</th>
										<th>Hodiny</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Oprava klavesnice</td>
										<td>11:00 24.3.2018</td>
										<td>12:00 24.3.2018</td>
										<td>1</td>
									</tr>
									<tr>
										<td />
										<td>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder="Name"
											/>
										</td>
										<td>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder="Od"
											/>
										</td>
										<td>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder="Do"
											/>
										</td>
										<td>
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
				<div class="row">
					<div class="col-md-12">
						<div class="table-responsive">
							<table class="table m-t-30">
								<thead>
									<tr>
										<th>#</th>
										<th>Fakturovatelne položky</th>
										<th>Quantity</th>
										<th>Unit Cost</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>LCD</td>
										<td>1</td>
										<td>$380</td>
										<td>$380</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Mobile</td>
										<td>5</td>
										<td>$50</td>
										<td>$250</td>
									</tr>
									<tr>
										<td />
										<td>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder="Name"
											/>
										</td>
										<td>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder="Pocet"
											/>
										</td>
										<td>
											<input
												type="text"
												class="form-control mb-2"
												id="inlineFormInput"
												placeholder="Cena/ks"
											/>
										</td>
										<td>
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
