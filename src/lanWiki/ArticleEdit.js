import React, {Component} from 'react';
import RichTextEditor from 'react-rte';
import firebase from 'firebase';
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
      this.ref2 = base.bindToState(`kb-tags`, {
        context: this,
        state: 'tags',
        asArray: true,
        then: ()=>{
          if(this.state.article!==null){
            this.setState({
              articleTags:(this.state.tags?this.state.tags:[]).map(tag => {
                tag.label = tag.name;
                tag.value = tag.id;
                return tag;
              }).filter((tag)=>[this.article.tags].includes(tag.id))});
        }},
      });

      this.ref = base.fetch('kb-articles/'+this.props.match.params.articleID, {
        context: this,
        state:'article',
        then(article){
            if(!article){
              this.props.history.push('/lanwiki');
              return;
            };
            if(this.state.tags===null){
              this.setState({article,articleText:RichTextEditor.createValueFromString(article.text,"html"),articleTitle:article.title,articleTags:article.tags});
            }else{
              this.setState({article,articleText:RichTextEditor.createValueFromString(article.text,"html"),articleTitle:article.title,
                articleTags:(this.state.tags?this.state.tags:[]).map(tag => {
                  tag.label = tag.name;
                  tag.value = tag.id;
                  return tag;
                }).filter((tag)=>[article.tags].includes(tag.id))});
            }
          }
      });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref);
      base.removeBinding(this.ref2);
  }

  submit(){
    let data={
      id:this.state.article.id,
      tags:this.state.articleTags.length>0?this.state.articleTags[0].id:this.state.article.tags,
      text:this.state.articleText.toString('html'),
      title:this.state.articleTitle
    }
    base.update('kb-articles/'+this.state.article.id, {
      data
    });
    this.props.history.goBack();
  }

  render() {
      return (
      <div style={{padding:10}}>
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
          <Button onClick={this.submit.bind(this)} bsStyle="primary">Save</Button>
      </div>
    );
}}
