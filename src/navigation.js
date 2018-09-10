import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';

import Sidebar from './Components/Sidebar';
import PageHeader from './Components/PageHeader';

import ServerList from './Components/assets/servers/ServerList';
import ServerAdd from './Components/assets/servers/ServerAdd';
import ServerEdit from './Components/assets/servers/ServerEdit';
import CompanyList from './Components/assets/companies/CompanyList';
import CompanyAdd from './Components/assets/companies/CompanyAdd';
import CompanyEdit from './Components/assets/companies/CompanyEdit';
import TaskList from './Components/assets/tasks/TaskList';
import {BrowserRouter, Route} from 'react-router-dom';

import Article from './Components/lanWiki/Article';
import ArticleList from './Components/lanWiki/ArticleList';
import ArticleEdit from './Components/lanWiki/ArticleEdit';

import './style.css';

export default class Navigation extends Component {
  render(){
    return(
      <div>
        <PageHeader {...this.props}/>
          <div>
            <Col xs={2} className='noPadding'>
              <Sidebar  {...this.props}/>
            </Col>
            <Col xs={10} className='noPadding'>
              <Route exact path='/servers' component={ServerList} />
              <Route exact path='/servers/add' component={ServerAdd } />
              <Route exact path='/servers/edit/:id' component={ServerEdit }/>
              <Route exact path='/companies' component={CompanyList} />
              <Route exact path='/companies/add' component={CompanyAdd} />
              <Route exact path='/companies/edit/:id' component={CompanyEdit} />
              <Route exact path='/tasks' component={TaskList} />
              <Route exact path='/lanwiki/articles' component={ArticleList} />
              <Route exact path='/lanwiki/articles/a-big-title' component={Article} />
              <Route exact path='/lanwiki/articles/edit/a-big-title' component={ArticleEdit} />
            </Col>
         </div>
      </div>
    )
  }
}
