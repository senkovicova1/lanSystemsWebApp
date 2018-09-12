import React, {Component} from 'react';
import RichTextEditor from 'react-rte';
import firebase from 'firebase';
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
    const E_S = EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML('<p>Hey this <strong>editor</strong> rocks 😀</p>')));
  /*  console.log(`html`);
    console.log(html);
    console.log(`contentBlock`);
    console.log(contentBlock);
    console.log(`contentState`);
    console.log(contentState);
    console.log(`E_S`);
    console.log(E_S);*/
    this.state = {
      tags:null,
      article:null,
      articleTitle:'',
      articleText: RichTextEditor.createValueFromString('',"html"),
      articleTags:[],
      es: EditorState.createEmpty(),
    } //ak to budem chciet dat do db, use this: this.state.text.toString("html")
    this.submit.bind(this);
    this.onEditorStateChange.bind(this);
  }

  onEditorStateChange(cs) {
    console.log(draftToHtml(convertToRaw(cs.getCurrentContent())));
      this.setState({
        es : cs,
      });
    };

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
            const E_S = EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(article.html)));
          if(this.state.tags===null){
              this.setState({es: E_S, article,articleText:RichTextEditor.createValueFromString(article.text,"html"),articleTitle:article.title,articleTags:article.tags});
            }else{
              this.setState({article,articleText:RichTextEditor.createValueFromString(article.text,"html"),articleTitle:article.title,
                articleTags:(this.state.tags?this.state.tags:[]).map(tag => {
                  tag.label = tag.name;
                  tag.value = tag.id;
                  return tag;
                }).filter((tag)=>article.tags.includes(tag.id)),
                es : E_S
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
      text:this.state.articleText.toString('html'),
      title:this.state.articleTitle,
      html: draftToHtml(convertToRaw(this.state.es.getCurrentContent())),
    }
    base.update('kb-articles/'+this.state.article.id, {
      data
    });
    this.props.history.goBack();
  }

  render() {
    const E_S = this.state.es;
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
            <div>
              <Editor
                editorState={E_S}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange.bind(this)}
              />
              <textarea
                value={E_S !== null ? draftToHtml(convertToRaw(E_S.getCurrentContent())) : "<p>not now</p>"}
              />
            </div>
      {/*      <RichTextEditor
              value={this.state.articleText}
              onChange={e => {
                this.setState({ articleText: e });
              }}
              toolbarClassName="demo-toolbar"
              editorClassName="demo-editor"
            />*/}
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
