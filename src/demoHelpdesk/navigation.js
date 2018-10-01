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
          <Col xs={1} className='noPadding'>
            <Sidebar  {...this.props}/>
          </Col>
          <Col xs={11} className='noPadding'>
          <Route exact path='/demoHelpdesk/taskList' component={TaskList} /> 
          </Col>
       </div>
      </div>
    )
  }
}
