import React, {Component} from 'react';
import base from '../../../firebase';
import firebase from 'firebase';
import AddNICModalForm from './AddNICModalForm';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class ServerEdit extends Component {

  constructor(props){
    super(props);
      this.state = {
        server : 0,
        companies: {},
        chosenCompany: null,
        nics : {},
      }
      this.editServer.bind(this);
      this.handleChange.bind(this);
      this.renderEditable.bind(this);
      this.handleDeleteNIC.bind(this);
  }

  componentDidMount(){
    const SERVER_ID = this.props.match.params.id;
    const DB = firebase.database().ref(`servers/${SERVER_ID}`);
    DB.on('value', snap =>
        this.setState({
          server : snap.val()
        })
      );

    this.ref1 = base.syncState(`nics`, {
        context: this,
        state: 'nics'
      });

    this.ref2 = base.syncState(`companies`, {
      context: this,
      state: 'companies'
    });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref1);
      base.removeBinding(this.ref2);
  }

  editServer(){
    firebase.database()
            .ref(`servers/${this.state.server.id}`)
            .update({
              serverName : this.name.value || this.state.server.serverName,
              companyName : this.company.value || this.state.server.companyName,
              description: this.description.value || this.state.server.description,
              serverFunction: this.serverFunction.value || this.state.server.serverFunction,
              processor: this.processor.value || this.state.server.processor,
              hdd: this.hdd.value || this.state.server.hdd,
            });
  }

  handleChange(event) {
      this.setState({
        chosenCompany: event.target.value
      });
    }

  handleDeleteNIC(event){
    firebase.database()
            .ref(`nics/${event}`)
            .remove();
  }

  renderEditable(cellInfo) {
      return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              let DATA = {...this.state.nics};
              DATA[cellInfo.original.id][cellInfo.column.id] = e.target.innerHTML;
              this.setState({
                nics : DATA
              });
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.nics[cellInfo.original.id][cellInfo.column.id]
            }}
          />
        );
      }


  render() {
      const DATA = Object
                    .values(this.state.nics)
                    .filter(val => val.serverID === this.state.server.id);
      const COLUMNS = [
              {
                Header: 'NIC',
                accessor: 'nic',
                Cell: this.renderEditable.bind(this)
              }, {
                Header: 'IP address',
                accessor: 'IPaddress',
                Cell: this.renderEditable.bind(this)
              },{
                Header: 'Mask',
                accessor: 'mask',
                Cell: this.renderEditable.bind(this)
              }, {
                Header: 'Gateway',
                accessor: 'gateway',
                Cell: this.renderEditable.bind(this)
              },{
                Header: 'DNS1',
                accessor: 'dns1',
                Cell: this.renderEditable.bind(this)
              }, {
                Header: 'DNS2',
                accessor: 'dns2',
                Cell: this.renderEditable.bind(this)
              },{
                Header: 'MAC',
                accessor: 'mac',
                Cell: this.renderEditable.bind(this)
              }, {
                Header: 'DHCP',
                accessor: 'dhcp',
                Cell : this.renderEditable.bind(this)
              },
              {
                Header: '',
                accessor: 'edit',
                Cell : row => {
                      return (
                          <div>
                            <Button bsSize='small' bsStyle='danger' onClick={(e) => {this.handleDeleteNIC(row.original.id)}}>Delete</Button>
                          </ div>
                        )
                      },
              },
            ];
    return (
          <div className='form'>

            <FormGroup controlId="inputName">
              <ControlLabel>Server Name</ControlLabel>
              <FormControl  inputRef={(input) => this.name = input} type="text" placeholder={this.state.server.serverName}/>
            </FormGroup>

            <FormGroup controlId="selectCompany">
              <ControlLabel>Select company</ControlLabel>
                <FormControl value={this.state.chosenCompany || this.state.server.companyName} onChange={this.handleChange.bind(this)} componentClass="select" placeholder="select" inputRef={(input) => this.company = input}>
                {
                  Object.keys(this.state.companies)
                        .map(c => <option key={c} value={this.state.companies[c].companyName}> {this.state.companies[c].companyName} </option> )
                }
                </FormControl>
            </FormGroup>

            <FormGroup controlId="inputFunction">
              <ControlLabel>Function</ControlLabel>
              <FormControl  inputRef={(input) => this.serverFunction = input} type="text" placeholder={this.state.server.serverFunction}/>
            </FormGroup>

            <FormGroup controlId="textareaDescription">
              <ControlLabel>Popis</ControlLabel>
              <FormControl inputRef={(input) => this.description = input} componentClass="textarea" placeholder={this.state.server.description} />
            </FormGroup>

            <FormGroup controlId="inputProcessor">
              <ControlLabel>Processor</ControlLabel>
              <FormControl  inputRef={(input) => this.processor = input} type="text" placeholder={this.state.server.processor}/>
            </FormGroup>

            <FormGroup controlId="textareaHDD">
              <ControlLabel>HDD</ControlLabel>
              <FormControl inputRef={(input) => this.hdd = input} componentClass="textarea" placeholder={this.state.server.hdd} />
            </FormGroup>

            <ReactTable
              data={DATA}
              columns={COLUMNS}
              defaultPageSize={5}
              className="-striped -highlight"
              showPagination={false}
            />

            <AddNICModalForm serverId={this.state.server.id}/>

            <p></p>

            <Link to={{ pathname: '/servers'}}>
              <Button type="submit" onClick={this.editServer.bind(this)} bsStyle='warning'>Edit this server</Button>
            </Link>
          </div>
        );
  }
}
