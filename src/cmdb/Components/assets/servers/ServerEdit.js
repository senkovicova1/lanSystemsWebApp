import React, {Component} from 'react';
import base from '../../../../firebase';
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
        id : null,
        serverName : null,
        companyName : null,
        description: null,
        serverFunction: null,
        processor: null,
        hdd: null,
        type : null,
        status : null,
        companies: {},
        nics : {},
        types : {},
        statuses : {},
      }
      this.editServer.bind(this);
      this.setAny.bind(this);
      this.renderEditable.bind(this);
      this.handleDeleteNIC.bind(this);
  }

  componentDidMount(){
    const SERVER_ID = this.props.match.params.id;
    const DB = firebase.database().ref(`cmdb-servers/${SERVER_ID}`);
    DB.on('value', snap =>
        this.setState({
          id : SERVER_ID,
          serverName : snap.val().serverName,
          companyName : snap.val().companyName,
          description: snap.val().description,
          serverFunction: snap.val().serverFunction,
          processor: snap.val().processor,
          hdd: snap.val().hdd,
          type : snap.val().type,
          status : snap.val().status,
        })
      );

    this.ref1 = base.syncState(`nics`, {
        context: this,
        state: 'nics'
      });

    this.ref2 = base.syncState(`settings-companies`, {
      context: this,
      state: 'companies'
    });

      this.ref3 = base.syncState(`cmdb-types`, {
          context: this,
          state: 'types'
        });

      this.ref4 = base.syncState(`cmdb-statuses`, {
          context: this,
          state: 'statuses'
        });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref1);
      base.removeBinding(this.ref2);
      base.removeBinding(this.ref3);
      base.removeBinding(this.ref4);
  }

  editServer(){
    firebase.database()
            .ref(`cmdb-servers/${this.state.id}`)
            .update({
              serverName : this.state.serverName,
              companyName : this.state.companyName,
              description: this.state.description,
              serverFunction: this.state.serverFunction,
              processor: this.state.processor,
              hdd: this.state.hdd,
              type: this.state.type,
              status: this.state.status
            });
  }

  setAny(key, value){
    let newState={};
    newState[key]=value.target.value;
    this.setState( newState);
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
                    .filter(val => val.serverID === this.state.id);
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
              <FormControl  type="text" placeholder='Enter name' value={this.state.serverName} onChange={(e) => this.setState({ serverName: e.target.value })}/>
            </FormGroup>

            <FormGroup controlId="selectCompany">
              <ControlLabel>Select company</ControlLabel>
                <FormControl value={this.state.companyName} onChange={(value) => this.setAny('companyName', value)} componentClass="select" placeholder="select" >
                {
                  Object.keys(this.state.companies)
                        .map(c => <option key={c} value={this.state.companies[c].companyName}> {this.state.companies[c].companyName} </option> )
                }
                </FormControl>
            </FormGroup>

            <FormGroup controlId="selectCompany">
              <ControlLabel>Select type</ControlLabel>
                <FormControl value={this.state.type} onChange={(value) => this.setAny('type', value)} componentClass="select" placeholder="select" >
                {
                  Object.keys(this.state.types)
                        .map(c => <option key={c} value={this.state.types[c].typeName}> {this.state.types[c].typeName} </option> )
                }
                </FormControl>
            </FormGroup>

            <FormGroup controlId="selectCompany">
              <ControlLabel>Select status</ControlLabel>
                <FormControl value={this.state.status} onChange={(value) => this.setAny('status', value)} componentClass="select" placeholder="select" >
                {
                  Object.keys(this.state.statuses)
                        .map(c => <option key={c} value={this.state.statuses[c].statusName}> {this.state.statuses[c].statusName} </option> )
                }
                </FormControl>
            </FormGroup>

            <FormGroup controlId="inputFunction">
              <ControlLabel>Function</ControlLabel>
              <FormControl  placeholder='Enter function' value={this.state.serverFunction} onChange={(e) => this.setState({ serverFunction: e.target.value })} type="text" />
            </FormGroup>

            <FormGroup controlId="textareaDescription">
              <ControlLabel>Description</ControlLabel>
              <FormControl componentClass="textarea" placeholder='Enter describtion' value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
            </FormGroup>

            <FormGroup controlId="inputProcessor">
              <ControlLabel>Processor</ControlLabel>
              <FormControl type="text" placeholder='Enter processor' value={this.state.processor} onChange={(e) => this.setState({ processor: e.target.value })} />
            </FormGroup>

            <FormGroup controlId="textareaHDD">
              <ControlLabel>HDD</ControlLabel>
              <FormControl componentClass="textarea"  placeholder='Enter HDD' value={this.state.hdd} onChange={(e) => this.setState({ hdd: e.target.value })} />
            </FormGroup>

            <ReactTable
              data={DATA}
              columns={COLUMNS}
              defaultPageSize={5}
              className="-striped -highlight"
              showPagination={false}
            />

            <AddNICModalForm serverId={this.state.id}/>

            <p></p>

            <Link to={{ pathname: '/cmdb/servers'}}>
              <Button type="submit" onClick={this.editServer.bind(this)} bsStyle='warning'>Edit this server</Button>
            </Link>
          </div>
        );
  }
}
