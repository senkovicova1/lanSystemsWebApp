import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import RichTextEditor from 'react-rte';
import { FormGroup, ControlLabel, FormControl, Col, Checkbox, Table } from 'react-bootstrap';
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
  }

  componentWillMount(){
      this.ref2 = base.bindToState(`kb-tags`, {
        context: this,
        state: 'tags',
        asArray: true
      });

      this.ref = base.bindToState(`kb-articles`, {
        context: this,
        asArray: true,
        state:'article',
        then: ()=>{
          let article=this.state.article && this.state.article.length===1?this.state.article[0]:null;
          if(!article) return null;
          this.setState({article,articleText:RichTextEditor.createValueFromString(article.text,"html"),articleTitle:article.title,articleTags:article.tags});
        },
        queries: {
          orderByChild: 'id',
          equalTo: parseInt(this.props.match.params.articleID),
        }
      });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref);
      base.removeBinding(this.ref2);
  }

  render() {
      return (
      <div>

          <Link to={{ pathname: '/lanWiki/articles/a-big-title'}}>
            <p>Save</p>
          </Link>

          <FormGroup bsSize="large" controlId="inputName">
            <FormControl type="text" value={this.state.articleTitle}/>
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
              options={this.state.tags.map(tag => {
                tag.label = tag.name;
                tag.value = tag.id;
                return tag;
              })}
              isMulti
              value={this.state.articleTags}
              onChange={e =>{ this.setState({ articleTags: e })}}
            />
          </FormGroup>
          <FormGroup controlId="multiselectTag">
            <p> </p>
          </FormGroup>
          <FormGroup controlId="multiselectACL">
            <Col xs={2}>
              <ControlLabel>ACL:</ControlLabel>
            </Col>
            <Col xs={10}>
              <FormControl componentClass="select" multiple>
                <option value="r">Read</option>
                <option value="w">Write</option>
              </FormControl>
              <FormGroup>
                <Table>
                  <thead>
                    <tr>
                    <th> </th>
                    <th>View</th>
                    <th>Read</th>
                    <th>Write</th>
                    <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><h4> All </h4> </td>
                      <td> <Checkbox inline> </Checkbox> </td>
                      <td> <Checkbox inline> </Checkbox> </td>
                      <td> <Checkbox inline> </Checkbox> </td>
                      <td> <Checkbox inline> </Checkbox> </td>
                    </tr>
                  </tbody>
                </Table>
              </FormGroup>
            </Col>
          </FormGroup>
      </div>
    );
}}
