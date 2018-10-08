import React, { Component } from 'react';
import { Button, Modal, Badge, InputGroup, Glyphicon, FormControl } from 'react-bootstrap';

export default class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openAddStatusModal: false,
			openAddTaskModal: false,
			isColumn: false,
			search: '',
			taskListType: 'option2',
			filterView: 'false',
		};
	}
	render() {
		return (
			<div className="card" style={{ height: '100%', background: 'white'}}>
				Filter
			</div>
		);
	}
}
