import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import TaskList from './TaskList';
import TaskTop from './TaskTop';
import TaskTop2 from './TaskTop2';
import TaskTop3 from './TaskTop3';
import TaskTop4 from './TaskTop4';
import TaskSide from './TaskSide';
import TaskSide2 from './TaskSide2';
import TaskSideLeft from './TaskSideLeft';
import CompaniesList from './settings/CompaniesList';
import CompanyEdit from './settings/CompanyEdit';
import UsersList from './settings/UsersList';
import UserEdit from './settings/UserEdit';

export default class Navigation extends Component {
	render() {
		return (
			<div>
				<div>
					<Sidebar {...this.props} />

					<Route exact path="/demoHelpdesk/taskList" component={TaskList} />
					<Route exact path="/demoHelpdesk/taskTop" component={TaskTop} />
					<Route exact path="/demoHelpdesk/taskTop2" component={TaskTop2} />
					<Route exact path="/demoHelpdesk/taskTop3" component={TaskTop3} />
					<Route exact path="/demoHelpdesk/taskTop4" component={TaskTop4} />
					<Route exact path="/demoHelpdesk/taskSide" component={TaskSide} />
					<Route exact path="/demoHelpdesk/taskSide2" component={TaskSide2} />
					<Route exact path="/demoHelpdesk/taskSideLeft" component={TaskSideLeft} />
					<Route exact path="/demoHelpdesk/settings/companies" component={CompaniesList} />
					<Route exact path="/demoHelpdesk/settings/companyEdit" component={CompanyEdit} />
					<Route exact path="/demoHelpdesk/settings/users" component={UsersList} />
					<Route exact path="/demoHelpdesk/settings/userEdit" component={UserEdit} />
				</div>
			</div>
		);
	}
}
