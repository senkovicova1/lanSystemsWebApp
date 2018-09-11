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
            <Route exact path='/lanwiki/add/tag' component={null} />
            <Route exact path='/lanwiki/tag/:tagID' component={ArticleList} />
            <Route exact path='/lanwiki/tag/:tagID/article/:articleID' component={Article} />
            <Route exact path='/lanwiki/tag/:tagID/article/:articleID/edit' component={ArticleEdit} />
          </Col>
       </div>
      </div>
    )
  }
}
