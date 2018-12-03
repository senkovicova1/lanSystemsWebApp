import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';
import TasksBoard from './TasksBoard';
import TasksRow from './TasksRow';
import Filter from './Filter';
import TasksTwo from './TasksTwo';

const sortTypes = [{ id: 0, name: "Name" }, { id: 1, name: "Created" }, { id: 2, name: "Deadline" }]

export default class TaskListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openAddStatusModal: false,
			openAddTaskModal: false,
			isColumn: false,
			search: '',
			taskListType: 'option2',
			filterView: true,
			sortType: 0
		};
	}
	render() {
		return (
			<div className="content-page">
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-6">
								<h4 className="page-title">All Tasks</h4>
							</div>
							<div class="col-sm-6">
								<div class="h5 m-0 pull-right">
									<div class="btn-group btn-group-toggle" data-toggle="buttons">
										<label
											class={
												'btn btn-secondary' +
												(this.state.taskListType === 'option1' ? ' active' : '')
											}
										>
											<input
												type="radio"
												name="options"
												id="option1"
												autocomplete="off"
												checked={this.state.taskListType === 'option1'}
												onChange={() => this.setState({ taskListType: 'option1' })}
											/>
											Board
										</label>
										<label
											class={
												'btn btn-secondary' +
												(this.state.taskListType === 'option2' ? ' active' : '')
											}
										>
											<input
												type="radio"
												name="options"
												id="option2"
												autocomplete="off"
												onChange={() => this.setState({ taskListType: 'option2' })}
												checked={this.state.taskListType === 'option2'}
											/>
											Row
										</label>

										<label
											class={
												'btn btn-secondary' +
												(this.state.taskListType === 'option3' ? ' active' : '')
											}
										>
											<input
												type="radio"
												name="options"
												id="option3"
												autocomplete="off"
												onChange={() => this.setState({ taskListType: 'option3' })}
												checked={this.state.taskListType === 'option3'}
											/>
											Two
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="row m-t-10 m-b-10">
							<div class="d-flex flex-row align-items-center">
								<div className="p2" style={{ marginLeft: 10 }}>
									<button class="btn btn-success waves-effect waves-light btn-sm" onClick={() => this.setState({ filterView: !this.state.filterView })}>Filter</button>
								</div>
								<div class="p-2" >
									<div class="input-group">
										<input type="text" class="form-control" placeholder="Search" />
										<div class="input-group-append">
											<button class="btn btn-white" type="button">
												<i class="fa fa-search" />
											</button>
										</div>
									</div>
								</div>
								<div class="p-2">
									<p className="m-0">Global search</p>
								</div>
								<div className="p-2">
									<div className="checkbox form-check-inline" style={{ marginLeft: 38,marginRight: 30 }}>
										<input id="checkbox0" type="checkbox" />
										<label for="checkbox0">NEW</label>
									</div>
									<div className="checkbox form-check-inline" style={{ marginRight: 30 }}>
										<input id="checkbox0" type="checkbox" />
										<label for="checkbox0">OPEN</label>
									</div>
									<div className="checkbox form-check-inline" style={{ marginRight: 30 }}>
										<input id="checkbox0" type="checkbox" />
										<label for="checkbox0">PENDING</label>
									</div>
									<div className="checkbox form-check-inline" style={{ marginRight: 30 }}>
										<input id="checkbox0" type="checkbox" />
										<label for="checkbox0">CLOSED</label>
									</div>
								</div>
							</div>
							<div class="p-2 ml-auto">
								<span class="font-16 m-r-10">Sort By:</span>
								<DropdownButton
									id="pageSelector"
									title={sortTypes.find((item) => item.id === this.state.sortType).name}
									noCaret
									style={{ backgroundColor: 'black', borderWidth: 0, borderRadius: 0, marginLeft: 20 }}
								>
									{
										sortTypes.map((item) =>
											<MenuItem onClick={() => this.setState({ sortType: item.id })}>{item.name}</MenuItem>
										)
									}
								</DropdownButton>

							</div>
						</div>
					</div>

					<div class="row m-0">
						{this.state.filterView && (
							<div className="col-xl-3">
								<Filter />
							</div>
						)}

						{this.state.taskListType === 'option2' && (
							<div class={'' + (this.state.filterView ? 'col-xl-9' : 'col-xl-12')}>
								<TasksRow />{' '}
							</div>
						)}

						{this.state.taskListType === 'option1' && (
							<div class={'' + (this.state.filterView ? 'col-xl-9' : 'col-xl-12')}>
								<TasksBoard />
							</div>
						)}

						{this.state.taskListType === 'option3' && (
							<div class={'' + (this.state.filterView ? 'col-xl-9' : 'col-xl-12')}>
								<TasksTwo />
							</div>
						)}
					</div>

				</div>
			</div>
		);
	}
}
