import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import TaskList from './TaskList';


export default class Navigation extends Component {
  render(){
    return(
      <div>
        <div>

            <Sidebar  {...this.props}/>

          <Route exact path='/demoHelpdesk/taskList' component={TaskList} /> 

       </div>
      </div>
    )
  }
}
