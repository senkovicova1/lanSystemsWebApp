import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';


export default class TasksRow extends Component {
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
		return (
			<div>
				<div className="row m-t-20">
					<div class="col-md-4">
						<form role="form">
							<div class="form-group contact-search m-b-10">
								<input type="text" id="search" class="form-control" placeholder="Search..." />
								<button type="submit" class="btn btn-white">
									<i class="fa fa-search" />
								</button>
							</div>
						</form>
					</div>

					<div class="col-md-8">
						<div class="h5 m-0 pull-right">
							<span class="font-16 m-r-10">Sort By:</span>
							<div class="btn-group btn-group-toggle" data-toggle="buttons">
								<label class="btn btn-secondary active">
									<input
										type="radio"
										name="options"
										id="option1"
										autocomplete="off"
										checked
									/>
									Name
										</label>
								<label class="btn btn-secondary">
									<input type="radio" name="options" id="option2" autocomplete="off" /> Created date
										</label>
								<label class="btn btn-secondary">
									<input type="radio" name="options" id="option3" autocomplete="off" /> Deadline
										</label>
							</div>
						</div>
					</div>
				</div>


				<div className="row">
					<div className="col-lg-4">
						<ul className="sortable-list taskList list-unstyled" id="upcoming">
							<li className="task-new" id="task1">
								<div className="checkbox checkbox-primary">
									<input type="checkbox" aria-label="Single checkbox Two" />
									<label>#142 Nefunguje klavesnica</label>
								</div>
								<span class="label label-info m-r-5">Tag 1</span>
								<span class="label label-success m-r-5">Tag 2</span>
								<div className="m-t-5">
									<p className="pull-right m-b-0">
										<i className="fa fa-clock-o" />{' '}
										<span title="15/06/2016 12:56">15/06/2016</span>
									</p>
									<p className="text-muted m-b-0 font-13">
										<span className="font-bold">Zadal: Petey Cruiser</span>
									</p>
									<p className="text-muted m-b-10 font-13">
										<span className="font-bold">Riesi: Petey Cruiser</span>
									</p>
								</div>
							</li>
						</ul>

						<ul className="sortable-list taskList list-unstyled" id="upcoming">
							<li className="task-new" id="task1">
								<div className="checkbox checkbox-primary">
									<input type="checkbox" aria-label="Single checkbox Two" />
									<label>#142 Nefunguje klavesnica</label>
								</div>
								<span class="label label-info m-r-5">Tag 1</span>
								<span class="label label-success m-r-5">Tag 2</span>
								<div className="m-t-5">
									<p className="pull-right m-b-0">
										<i className="fa fa-clock-o" />{' '}
										<span title="15/06/2016 12:56">15/06/2016</span>
									</p>
									<p className="text-muted m-b-0 font-13">
										<span className="font-bold">Zadal: Petey Cruiser</span>
									</p>
									<p className="text-muted m-b-10 font-13">
										<span className="font-bold">Riesi: Petey Cruiser</span>
									</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="col-lg-8">
						<div class="card-box">
							<div class="row">
								<div className="col-lg-12">
									<h1># 142 Nefunguje klavesnica</h1>
								</div>
								<div className="col-lg-4">
									<div class="m-t-20">
										<p><strong>Status: </strong><span class="label label-pink">Opakovanie</span></p>
										<p class="m-t-10"><strong>Projekt: </strong>hotline@lansystems.sk </p>
										<p class="m-t-10"><strong>Opakovanie: </strong>none </p>
									</div>
								</div>
								<div className="col-lg-4">
									<div class="m-t-20">
										<p><strong>Zadal: </strong>hotline@lansystems.sk</p>
										<p class="m-t-10"><strong>Firma: </strong>LAN Systems s.r.o. </p>
										<p class="m-t-10"><strong>Riesi: </strong>hotline@lansystems.sk</p>
									</div>
								</div>

								<div className="col-lg-4">
									<div class="m-t-20">
										<p><strong>Pripomienka: </strong></p>
										<p class="m-t-10"><strong>Deadline: </strong>hotline@lansystems.sk </p>
										<p class="m-t-10"><strong>Typ práce: </strong>none </p>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="table-responsive">
										<table class="table m-t-30">
											<thead>
												<tr><th>#</th>
													<th>Práce</th>
													<th>Od</th>
													<th>Do</th>
													<th>Hodiny</th>
												</tr></thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Oprava klavesnice</td>
													<td>11:00 24.3.2018</td>
													<td>12:00 24.3.2018</td>
													<td>1</td>
												</tr>
												<tr>
													<td>
													</td>
													<td>
														<input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Name" />
													</td>
													<td>
														<input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Od" />
													</td>
													<td>
														<input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Do" />
													</td>
													<td><button class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-plus"></i> </button></td>
												</tr>
											</tbody>
										</table>
									</div>
									<div class="row justify-content-end">
										<div class="col-md-3">
											<p class="text-right m-b-0"><b>Spolu:</b> 1 hodiny</p>
										</div>
									</div>
								</div>

							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="table-responsive">
										<table class="table m-t-30">
											<thead>
												<tr><th>#</th>
													<th>Fakturovatelne položky</th>
													<th>Quantity</th>
													<th>Unit Cost</th>
													<th>Total</th>
												</tr></thead>
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
													<td>
													</td>
													<td>
														<input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Name" />
													</td>
													<td>
														<input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Pocet" />
													</td>
													<td>
														<input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Cena/ks" />
													</td>
													<td><button class="btn btn-icon waves-effect waves-light btn-primary"> <i class="fa fa-plus"></i> </button></td>
												</tr>
											</tbody>
										</table>
									</div>
									<div class="row justify-content-end">
										<div class="col-md-3">
											<p class="text-right m-b-0"><b>Sub-total:</b> 2930.00</p>
											<p class="text-right m-b-0">VAT: 20%</p>
											<p class="text-right m-b-0">USD 2930.00</p>
										</div>
									</div>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}
