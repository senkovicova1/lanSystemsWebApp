import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import TasksBoard from './TasksBoard';
import TasksRow from './TasksRow';
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
										<label class={"btn btn-secondary" + (this.state.taskListType === "option1" ? " active" : "")}>
											<input
												type="radio"
												name="options"
												id="option1"
												autocomplete="off"
												checked={this.state.taskListType === "option1"}
												onChange={() => this.setState({ taskListType: "option1" })}
											/>
											Board
										</label>
										<label class={"btn btn-secondary" + (this.state.taskListType === "option2" ? " active" : "")}>
											<input type="radio" name="options" id="option2" autocomplete="off"
												onChange={() => this.setState({ taskListType: "option2" })}
												checked={this.state.taskListType === "option2"} />
											Row
										</label>
										<label class={"btn btn-secondary" + (this.state.taskListType === "option3" ? " active" : "")}>
											<input type="radio" name="options" id="option3" autocomplete="off"
												onChange={() => this.setState({ taskListType: "option3" })}
												checked={this.state.taskListType === "option3"} />
											Two
										</label>
									</div>
								</div>
							</div>
						</div>
						{this.state.taskListType === "option1" && <TasksBoard />}
						{this.state.taskListType === "option2" && <TasksRow />}
						{this.state.taskListType === "option3" && <TasksTwo />}
					</div>
				</div>
			</div>
		);
	}
}
