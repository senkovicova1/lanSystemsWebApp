import React, { Component } from 'react';
import base from '../firebase';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import sampleArticles from '../samples/sampleArticles';

export default class ArticleList extends Component{

  constructor(props){
    super(props);
    this.state = {
      samples : null,
    }
    this.addSamples.bind(this);
  }

  componentWillMount(){
      this.ref = base.syncState(`kb-article-titles`, {
        context: this,
        state: 'samples'
      });
  }

  addSamples(){
      this.setState({
        samples : sampleArticles,
      });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref);
  }

  render(){
    return (
      <div>
          <div className='DataTable'>
            <Button onClick={this.addSamples.bind(this)}>aaa</Button>
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
      </div>
    );
  }
}
