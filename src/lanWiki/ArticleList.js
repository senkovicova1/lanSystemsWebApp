import React, { Component } from 'react';
import base from '../firebase';
import { Link } from 'react-router-dom';

export default class ArticleList extends Component{

  constructor(props){
    super(props);
    this.state = {
      articles : [],
      tags:[],
    }
    this.tagsToString.bind(this);
  }

  componentWillMount(){
    this.ref2 = base.bindToState(`kb-tags`, {
      context: this,
      state: 'tags',
      asArray: true
    });
    if(this.props.match.params.tagID==='all'){
      this.ref = base.bindToState(`kb-articles`, {
        context: this,
        state: 'articles',
        asArray: true
      });
    }else{
      this.ref = base.bindToState(`kb-articles`, {
        context: this,
        state: 'articles',
        asArray: true,
        queries: {
          orderByChild: 'tags',
          includes: parseInt(this.props.match.params.tagID),
        }
      });
    }
  }

  componentWillReceiveProps(props){
    if (props.match.params.tagID !== this.props.match.params.tagID){
      base.removeBinding(this.ref);
      if(props.match.params.tagID==='all'){
        this.ref = base.bindToState(`kb-articles`, {
          context: this,
          state: 'articles',
          asArray: true
        });
      }else{
        this.ref = base.bindToState(`kb-articles`, {
          context: this,
          state: 'articles',
          asArray: true,
          queries: {
            orderByChild: 'tags',
            equalTo: parseInt(props.match.params.tagID),
          }
        });
      }
    }
  }

  tagsToString(tags){
    let show = this.state.tags.filter((tag)=>tags.includes(tag.id));
    let result="";
    show.map((item)=>result+=item.name+' ');
    return result;
  }

  componentWillUnmount() {
      base.removeBinding(this.ref);
      base.removeBinding(this.ref2);
  }

  render(){
    return (
      <div>
        <Link to={{pathname: `/lanwiki`}}>
          <p>+ Article</p>
        </Link>
        {this.state.articles.map((article)=>
          <div key={article.id}>

            <h3>{article.title}</h3>
            <p>
              Tags: {this.tagsToString(article.tags)}
            </p>

            <div dangerouslySetInnerHTML={{__html:article.text.substring(0,655)+'...'}} />

            <Link className='articleRead' to={{pathname: './'+this.props.match.params.tagID+`/article/`+article.id}}>
              <p className='articleAddButton' >read more...</p>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
