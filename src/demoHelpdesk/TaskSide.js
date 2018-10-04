import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Comments from './components/comments.js';
import Subtasks from './components/subtasks.js';

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
									<Subtasks />
									<Comments />
								</div>
							</div>
							<div className="col-lg-4">
								<div class="card-box">
									<p>
										<strong>Status: </strong>
										<span class="label label-pink">Opakovanie</span>
									</p>
									<p class="m-t-10">
										<strong>Projekt: </strong>
										hotline@lansystems.sk{' '}
									</p>
									<p class="m-t-10">
										<strong>Typ práce: </strong>
										none{' '}
									</p>

									<p>
										<strong>Zadal: </strong>
										hotline@lansystems.sk
									</p>
									<p class="m-t-10">
										<strong>Firma: </strong>
										LAN Systems s.r.o.{' '}
									</p>
									<p class="m-t-10">
										<strong>Riesi: </strong>
										hotline@lansystems.sk
									</p>

									<p>
										<strong>Pripomienka: </strong>
										none
									</p>
									<p class="m-t-10">
										<strong>Deadline: </strong>
										hotline@lansystems.sk{' '}
									</p>
									<p class="m-t-10">
										<strong>Opakovanie: </strong>
										none{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
