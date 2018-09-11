import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import {Route} from 'react-router-dom';

import Sidebar from './Components/Sidebar';

import ServerList from './Components/assets/servers/ServerList';
import ServerAdd from './Components/assets/servers/ServerAdd';
import ServerEdit from './Components/assets/servers/ServerEdit';
import CompanyList from './Components/assets/companies/CompanyList';
import CompanyAdd from './Components/assets/companies/CompanyAdd';
import CompanyEdit from './Components/assets/companies/CompanyEdit';
import TaskList from './Components/assets/tasks/TaskList';

export default class Navigation extends Component {
  render(){
    return(
      <div>
          <div>
            <Col xs={1} className='noPadding'>
              <Sidebar  {...this.props}/>
            </Col>
            <Col xs={11} className='noPadding'>
              <Route exact path='/cmdb/servers' component={ServerList} />
              <Route exact path='/cmdb/servers/add' component={ServerAdd } />
              <Route exact path='/cmdb/servers/edit/:id' component={ServerEdit }/>
              <Route exact path='/cmdb/companies' component={CompanyList} />
              <Route exact path='/cmdb/companies/add' component={CompanyAdd} />
              <Route exact path='/cmdb/companies/edit/:id' component={CompanyEdit} />
              <Route exact path='/cmdb/tasks' component={TaskList} />
            </Col>
         </div>
      </div>
    )
  }
}
