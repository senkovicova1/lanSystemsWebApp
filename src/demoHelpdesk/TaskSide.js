import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Comments from './components/comments.js';
import Subtasks from './components/subtasks.js';
import Items from './components/items';

export default class TaskSide extends Component {
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
			<div className="content-page">
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-8">
								<div class="card-box">
									<h1># 142 Nefunguje klavesnica</h1>
									<hr />

									<div className="m-b-20">
										<strong>Tagy: </strong>
										<span class="label label-info m-r-5">Mimo pracovných hodín</span>
										<span class="label label-success m-r-5">Telefonovať</span>
									</div>
									<label class="">Popis</label>
									<textarea class="form-control" rows="2" />
								</div>
								<div class="card-box">

									<Subtasks />
									<Items />
								</div>

								<div class="card-box">

									<Comments />
								</div>
							</div>
							<div className="col-lg-4">
								<div class="card-box">
									<div class="table-responsive">
										<table class="table">
											<tbody>
												<tr>
													<td>
														<strong>Status: </strong>
													</td>
													<td>
														<span class="label label-pink">New</span>
													</td>
												</tr>
												<tr>
													<td>
														<strong>Projekt: </strong>
													</td>
													<td>hotline@lansystems.sk</td>
												</tr>
												<tr>
													<td>
														<strong>Zadal: </strong>
													</td>
													<td>Branislav Šusta</td>
												</tr>
												<tr>
													<td>
														<strong>Projekt: </strong>
													</td>
													<td>hotline@lansystems.sk</td>
												</tr>
												<tr>
													<td>
														<strong>Riesi: </strong>
													</td>
													<td>Branislav Šusta</td>
												</tr>
												<tr>
													<td>
														<strong>Pripomienka: </strong>
													</td>
													<td>12:00 31.12.2018</td>
												</tr>
												<tr>
													<td>
														<strong>Deadline: </strong>
													</td>
													<td>12:00 31.12.2018</td>
												</tr>
												<tr>
													<td>
														<strong>Opakovanie: </strong>
													</td>
													<td>12:00 31.12.2018</td>
												</tr>
												<tr>
													<td>
														<strong>Pausal/Projekt: </strong>
													</td>
													<td>Pausal</td>
												</tr>
												<tr>
													<td>
														<strong>Práce mimo pracovných hodín: </strong>
													</td>
													<td>Nie</td>
												</tr>
											</tbody>
										</table>
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
