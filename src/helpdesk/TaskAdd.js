import React, {Component} from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import Select from 'react-select';
import base from '../firebase';

export default class StatusAdd extends Component {

  constructor(props){
    super(props);
    this.state = {
      title:'',
      status:null,
      statuses:[],
      task:null,
    }
    this.submit.bind(this);
  }

  componentWillMount(){
      this.ref = base.bindToState(`hd-tasks`, {
        context: this,
        state: 'task',
        asArray: true,
        queries: {
          orderByChild: 'id',
          limitToLast: 1
        }
      });
      this.ref2 = base.bindToState(`hd-statuses`, {
        context: this,
        state: 'statuses',
        asArray: true
      });
    }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    base.removeBinding(this.ref2);
  }

  submit(){
    if(this.state.status===null){
      this.setState({status:this.state.statuses.length>0?this.state.statuses.map(item=>{
        item.value=item.id;
        item.label=item.title;
        return item;
      })[0]:null});
      return;
    }
    let data={
      title:this.state.title,
      status:this.state.status.id,
      id:(this.state.task.length>0?this.state.task[0].id+1:0)
    }
    base.post(`hd-tasks/`+data.id,{data});
    this.props.closeModal();
  }

  render() {
      return (
      <div style={{padding:10}}>
        <FormGroup bsSize="large" controlId="inputName">
        <label>Task name</label>
          <FormControl type="text"
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
           value={this.state.title}/>
        </FormGroup>
        <FormGroup bsSize="large" controlId="inputName">
        <Select
          options={this.state.statuses.map(item=>{
            item.value=item.id;
            item.label=item.title;
            return item;
          })}
          value={this.state.status}
          onChange={e =>{ this.setState({ status: e })}}
          />
      </FormGroup>
          <Button onClick={this.submit.bind(this)} bsStyle="primary">Add</Button>
      </div>
    );
}}
