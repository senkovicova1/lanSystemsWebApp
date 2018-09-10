import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tags from './Tags';
import Comments from './Comments';

export default class ArticleList extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Col xs={8} >
          <div className='DataTable'>
            <Link to={{pathname: `/lanwiki/articles`}}>
              <p>+ Article</p>
            </Link>

            <h3> A Big Title </h3>
            <p> Created: Branislav Susta 7:23 10.9.2018, Last Edit: Branislav Susta 7:23 10.9.2018 </p>

            <p>
              Tags: Linux | Config List
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur vulputate est eget fringilla. Suspendisse faucibus velit id nibh venenatis, eu mollis velit euismod. Aliquam erat volutpat. Vivamus ac rhoncus urna. Etiam nec faucibus nisi. Cras quis elit pharetra, maximus nunc a, varius elit. Proin et sem accumsan, hendrerit purus id, rutrum velit. Fusce lacinia elit tellus, in tempus ante maximus id. Vivamus consequat risus ac semper dictum. Suspendisse elementum volutpat egestas.
            </p>

            <Link className='articleRead' to={{pathname: `/lanwiki/articles/a-big-title`}}>
              <p className='articleAddButton' >read more...</p>
            </Link>
          </div>
        </Col>
        <Col xs={4}>
          <Tags />
        </Col>
      </div>
    );
  }
}
