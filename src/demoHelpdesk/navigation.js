import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import TaskList from './TaskList';
import TaskTop from './TaskTop';
import TaskSide from './TaskSide';
import TaskSide2 from './TaskSide2';

export default class Navigation extends Component {
  render(){
    return(
      <div>
        <div>

            <Sidebar  {...this.props}/>

          <Route exact path='/demoHelpdesk/taskList' component={TaskList} /> 
          <Route exact path='/demoHelpdesk/taskTop' component={TaskTop} /> 
          <Route exact path='/demoHelpdesk/taskSide' component={TaskSide} /> 
          <Route exact path='/demoHelpdesk/taskSide2' component={TaskSide2} /> 
       </div>
      </div>
    )
  }
}
