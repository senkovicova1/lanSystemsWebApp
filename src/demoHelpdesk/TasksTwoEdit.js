import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import Comments from './components/comments.js';
import Subtasks from './components/subtasks.js';
import Items from './components/items.js';

const tableStyle = {
	border: 'none',
};

export default class TasksTwoEdit extends Component {
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
				<div class="card-box">
					<div class="row">
						<div className="col-lg-12">
							<h1># 142 Nefunguje klavesnica</h1>
							<hr />
						</div>
						<div className="col-lg-12">
							<strong>Tagy: </strong>
							<span class="label label-info m-r-5">Mimo pracovných hodín</span>
							<span class="label label-success m-r-5">Telefonovať</span>
						</div>
						<div className="col-lg-12 m-t-20">
							<table class="table table-borderless">
								<tbody>
									<tr>
										<td style={tableStyle}>
											<strong>Status: </strong>
										</td>
										<td style={tableStyle}>
											<span class="label label-pink">Opakovanie</span>
										</td>
										<td style={tableStyle}>
											<strong>Pripomienka: </strong>
										</td>
										<td style={tableStyle}>12:00 24.12.2018</td>
									</tr>
									<tr>
										<td style={tableStyle}>
											<strong>Projekt: </strong>
										</td>
										<td style={tableStyle}>hotline@lansystems.sk</td>
										<td style={tableStyle}>
											{' '}
											<strong>Deadline: </strong>
										</td>
										<td style={tableStyle}>12:00 24.12.2018</td>
									</tr>
									<tr>
										<td style={tableStyle}>
											{' '}
											<strong>Zadal: </strong>
										</td>
										<td style={tableStyle}>Branislav Šusta</td>
										<td style={tableStyle}>
											{' '}
											<strong>Opakovanie: </strong>
										</td>
										<td style={tableStyle}>None</td>
									</tr>
									<tr>
										<td style={tableStyle}>
											{' '}
											<strong>Firma </strong>
										</td>
										<td style={tableStyle}>None</td>

										<td style={tableStyle}>
											<strong>Typ práce: </strong>
										</td>
										<td style={tableStyle}>Servis IT</td>
									</tr>
									<tr>
										<td style={tableStyle}>
											{' '}
											<strong>Riesi </strong>
										</td>
										<td style={tableStyle}>None</td>

										<td style={tableStyle}>
											<strong>Pausál/Projekt </strong>
										</td>
										<td style={tableStyle}>Pausal</td>
									</tr>
									<tr>
										<td style={tableStyle}>
											{' '}
											<strong>Práca mimo pracovných hodín</strong>
										</td>
										<td style={tableStyle}>Nie</td>
										<td style={tableStyle} />
										<td style={tableStyle} />
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<label class="">Popis</label>
					<textarea class="form-control" rows="2" />
					<Subtasks />
					<Items />
					<Comments />
				</div>
			</div>
		);
	}
}
