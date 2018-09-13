import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

import TaskList from './TaskList';
import TaskListColumns from './TaskListColumns';
export default class Navigation extends Component {
  render(){
    return(
      <div>
        <div>
          <Col xs={1} className='noPadding'>
            <Sidebar  {...this.props}/>
          </Col>
          <Col xs={11} className='noPadding'>
              <Route exact path='/helpdesk/filter' component={TaskList} />
            <Route exact path='/helpdesk/filter/:id' component={TaskListColumns} />
          </Col>
       </div>
      </div>
    )
  }
}
