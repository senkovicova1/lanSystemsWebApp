import React, {Component} from 'react';
import RichTextEditor from 'react-rte';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import base from '../firebase';
import Select from 'react-select';

export default class ArticleEdit extends Component {

  constructor(props){
    super(props);
    this.state = {
      tags:null,
      article:null,
      articleTitle:'',
      articleText: RichTextEditor.createValueFromString('',"html"),
      articleTags:[],
    } //ak to budem chciet dat do db, use this: this.state.text.toString("html")
    this.submit.bind(this);
  }

  componentWillMount(){
    this.ref = base.bindToState(`kb-articles`, {
      context: this,
      state: 'article',
      asArray: true,
      queries: {
        orderByChild: 'id',
        limitToLast: 1
      }
    });

      this.ref2 = base.bindToState(`kb-tags`, {
        context: this,
        state: 'tags',
        asArray: true,
      });

    }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    base.removeBinding(this.ref2);
  }

  submit(){
    let data={
      id:(this.state.article.length>0?this.state.article[0].id+1:0),
      tags:this.state.articleTags.map((item)=>item.id),
      text:this.state.articleText.toString('html'),
      title:this.state.articleTitle
    }
    base.post('kb-articles/'+data.id,{data});
    this.props.history.goBack();
  }

  render() {
      return (
      <div style={{padding:10}}>
        <h3>Adding new article</h3>
          <FormGroup bsSize="large" controlId="inputName">
            <FormControl type="text"
              onChange={e => {
                this.setState({ articleTitle: e.target.value });
              }}
             value={this.state.articleTitle}/>
          </FormGroup>
          <FormGroup controlId="wisig">
            <ControlLabel>Edit Text</ControlLabel>
            <RichTextEditor
              value={this.state.articleText}
              onChange={e => {
                this.setState({ articleText: e });
              }}
              toolbarClassName="demo-toolbar"
              editorClassName="demo-editor"
            />
          </FormGroup>

          <FormGroup controlId="multiselectTag">
            <Select
              options={(this.state.tags?this.state.tags:[]).map(tag => {
                tag.label = tag.name;
                tag.value = tag.id;
                return tag;
              })}
              isMulti
              value={this.state.articleTags}
              onChange={e =>{ this.setState({ articleTags: e })}}
            />
          </FormGroup>
          <Button onClick={this.submit.bind(this)} bsStyle="primary">Add</Button>
      </div>
    );
}}
