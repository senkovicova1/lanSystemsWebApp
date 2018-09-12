import React, {Component} from 'react';
import RichTextEditor from 'react-rte';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import base from '../firebase';
import Select from 'react-select';

import { EditorState, convertToRaw, convertFromRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class ArticleEdit extends Component {

  constructor(props){
    super(props);
    this.state = {
      tags:null,
      article:null,
      articleTitle:'',
      articleText: EditorState.createEmpty(),
      articleTags:[],
    } //ak to budem chciet dat do db, use this: this.state.text.toString("html")
    this.submit.bind(this);
    this.onEditorStateChange.bind(this);
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

      base.fetch('kb-articles/'+this.props.match.params.articleID, {
        context: this,
        state:'article',
        then(article){
            if(!article){
              this.props.history.push('/lanwiki');
              return;
            };

            const TEXT = EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(article.text)));

            if(this.state.tags===null){
              this.setState({
                article,
                articleText: TEXT,
                articleTitle:article.title,
                articleTags:article.tags});
            }else{
              this.setState({
                article,
                articleText:TEXT,
                articleTitle:article.title,
                articleTags:(this.state.tags?this.state.tags:[]).map(tag => {
                  tag.label = tag.name;
                  tag.value = tag.id;
                  return tag;
                }).filter((tag)=>article.tags.includes(tag.id))
              });
            }
          }
      });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref2);
  }

  submit(){
    let data={
      id:this.state.article.id,
      tags:this.state.articleTags.map((item)=>item.id),
      text: draftToHtml(convertToRaw(this.state.articleText.getCurrentContent())),
      title:this.state.articleTitle,
    }
    base.update('kb-articles/'+this.state.article.id, {
      data
    });
    this.props.history.goBack();
  }

  onEditorStateChange(text) {
    this.setState({
      articleText : text
    });
  };

  render() {
    const TEXT = this.state.articleText;
      return (
      <div style={{padding:10}}>
          <h3>{'Editing article "' +this.state.articleTitle+'"' }</h3>
          <FormGroup bsSize="large" controlId="inputName">
            <FormControl type="text"
              onChange={e => {
                this.setState({ articleTitle: e.target.value });
              }}
             value={this.state.articleTitle}/>
          </FormGroup>
          <FormGroup controlId="wisig">
            <ControlLabel>Edit Text</ControlLabel>
            <div>
              <Editor
                editorState={TEXT}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange.bind(this)}
              />
              <textarea
                value={TEXT !== null ? draftToHtml(convertToRaw(TEXT.getCurrentContent())) : "<p>not now</p>"}
              />
            </div>
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
