import React, {Component} from 'react';
import firebase from 'firebase';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';
import RichTextEditor from 'react-rte';
import { Button, FormGroup, ControlLabel, FormControl, Col, Checkbox, Table } from 'react-bootstrap';

import Tags from './Tags';

export default class ArticleEdit extends Component {

  constructor(props){
    super(props);
    this.state = {
      description: RichTextEditor.createValueFromString(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur vulputate est eget fringilla. Suspendisse faucibus velit id nibh venenatis, eu mollis velit euismod. Aliquam erat volutpat. Vivamus ac rhoncus urna. Etiam nec faucibus nisi. Cras quis elit pharetra, maximus nunc a, varius elit. Proin et sem accumsan, hendrerit purus id, rutrum velit. Fusce lacinia elit tellus, in tempus ante maximus id. Vivamus consequat risus ac semper dictum. Suspendisse elementum volutpat egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed placerat augue, vitae mattis mauris. Sed molestie ac ex sed interdum. Phasellus dui sapien, porttitor ut mattis nec, placerat sed felis. Nam quis tincidunt lacus.

        Aenean blandit tortor est, et sodales ante ultrices ac. Pellentesque tincidunt varius aliquet. Suspendisse malesuada metus a sapien lacinia, vel tempor ex fringilla. Etiam a consequat orci, vitae aliquet arcu. Vivamus pellentesque venenatis quam non porta. Sed lobortis non ante ac iaculis. Proin malesuada libero metus. Nulla urna lacus, ultrices nec aliquet sit amet, gravida in eros. Vivamus efficitur fermentum erat eget viverra. Vivamus non tortor at ante sollicitudin pharetra. Proin consequat finibus diam, a fringilla turpis elementum fermentum. Quisque finibus lacus sed rutrum viverra.
        `,
        "html")
    } //ak to budem chciet dat do db, use this: this.state.description.toString("html")
  }

  render() {
      return (
      <div>
        <Col xs={8} className='DataTable'>

          <Link to={{ pathname: '/lanWiki/articles/a-big-title'}}>
            <p>Save</p>
          </Link>

          <FormGroup bsSize="large" controlId="inputName">
            <FormControl type="text" value='A Big Title'/>
          </FormGroup>

          <FormGroup controlId="multiselectTag">
            <Col xs={2}>
              <ControlLabel>Tags:</ControlLabel>
            </Col>
            <Col xs={10}>
              <FormControl componentClass="select" multiple>
                <option value="linux">Linux</option>
                <option value="configList">Config List</option>
                <option value="windows">Windows</option>
              </FormControl>
            </Col>
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
                    <th> </th>
                    <th>View</th>
                    <th>Read</th>
                    <th>Write</th>
                    <th>Actions</th>
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

          <FormGroup controlId="wisig">
            <ControlLabel>Edit Text</ControlLabel>
            <RichTextEditor
              value={this.state.description}
              onChange={e => {
                this.setState({ description: e });
              }}
              toolbarClassName="demo-toolbar"
              editorClassName="demo-editor"
            />
          </FormGroup>

        </Col>

        <Col xs={4}>
          <Tags />
        </Col>
      </div>
    );
}}
