import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

import Article from './Article';
import ArticleList from './ArticleList';
import ArticleEdit from './ArticleEdit';


export default class Navigation extends Component {
  render(){
    return(
      <div>
        <div>
          <Col xs={1} className='noPadding'>
            <Sidebar  {...this.props}/>
          </Col>
          <Col xs={11} className='noPadding'>
            <Route exact path='/lanwiki/articles' component={ArticleList} />
            <Route exact path='/lanwiki/articles/a-big-title' component={Article} />
            <Route exact path='/lanwiki/articles/edit/a-big-title' component={ArticleEdit} />
          </Col>
       </div>
      </div>
    )
  }
}
