import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import TasksBoard from './TasksBoard';
import TasksRow from './TasksRow';
import Filter from './Filter';
import TasksTwo from './TasksTwo';

export default class TaskListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openAddStatusModal: false,
			openAddTaskModal: false,
			isColumn: false,
			search: '',
			taskListType: 'option2',
			filterView: 'true',
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
								<div class="p-2">
									<button class="btn btn-success waves-effect waves-light">Filter</button>
								</div>
								<div class="p-2">
									<div class="input-group">
										<input type="text" class="form-control" placeholder="Search" />
										<div class="input-group-append">
											<button class="btn btn-white" type="button">
												<i class="fa fa-search" />
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="h5 p-2 ml-auto">
								<span class="font-16 m-r-10">Sort By:</span>
								<div class="btn-group btn-group-toggle" data-toggle="buttons">
									<label class="btn btn-secondary active">
										<input type="radio" name="options" id="option1" autocomplete="off" checked />
										Name
									</label>
									<label class="btn btn-secondary">
										<input type="radio" name="options" id="option2" autocomplete="off" /> Created
										date
									</label>
									<label class="btn btn-secondary">
										<input type="radio" name="options" id="option3" autocomplete="off" /> Deadline
									</label>
								</div>
							</div>
						</div>
						<div class="row">
							{this.state.filterView === 'true' && (
								<div className="col-xl-2">
									<Filter />
								</div>
							)}

							{this.state.taskListType === 'option2' && (
								<div class={'' + (this.state.filterView === 'true' ? 'col-xl-10' : 'col-xl-12')}>
									<TasksRow />{' '}
								</div>
							)}

							{this.state.taskListType === 'option1' && 
								<div class={'' + (this.state.filterView === 'true' ? 'col-xl-10' : 'col-xl-12')}>
								<TasksBoard />
								</div>}

							{this.state.taskListType === 'option3' && 
								<div class={'' + (this.state.filterView === 'true' ? 'col-xl-10' : 'col-xl-12')}>
							<TasksTwo />
							</div>}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
