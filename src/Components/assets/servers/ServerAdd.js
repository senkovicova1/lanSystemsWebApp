import React from 'react';
import base from '../../../firebase';
import firebase from 'firebase';
import AddNICModalForm from './AddNICModalForm';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class ServerAdd extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        id : null,
          serverName : null,
          companyName  : null,
          description : null,
          serverFunction : null,
          processor : null,
          hdd : null,
        companies : {},
        modalOpen : false,
        nics : {},
      }
      this.addServer = this.addServer.bind(this);
      this.renderEditable.bind(this);
      this.handleDeleteNIC.bind(this);
  }

  componentDidMount(){
    const ID = Date.now();
    this.setState({
      id : ID,
    })

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

  addServer(){
    if (this.name.value.length < 1) return;
    firebase.database()
            .ref(`servers/${this.state.id}`)
            .set({
              id: this.state.id,
              serverName : this.name.value,
              companyName : this.company.value,
              description: this.description.value,
              serverFunction: this.serverFunction.value,
              processor: this.processor.value,
              hdd: this.hdd.value,
            });
  }

  handleDeleteNIC(id){
    firebase.database()
            .ref(`nics/${id}`)
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
              <FormControl  inputRef={(input) => this.name = input} type="text" placeholder="Enter Server Name"/>
          </FormGroup>

          <FormGroup controlId="selectCompany">
            <ControlLabel>Select company</ControlLabel>
              <FormControl componentClass="select" placeholder="select" inputRef={(input) => this.company = input}>
                {
                  Object.keys(this.state.companies)
                        .map(c => <option key={c} value={this.state.companies[c].companyName}> {this.state.companies[c].companyName} </option> )
                }
              </FormControl>
          </FormGroup>

          <FormGroup controlId="inputFunction">
            <ControlLabel>Function</ControlLabel>
            <FormControl  inputRef={(input) => this.serverFunction = input } type="text" placeholder="Enter Server Function"/>
          </FormGroup>

          <FormGroup controlId="textareaDescription" >
            <ControlLabel>Popis</ControlLabel>
            <FormControl inputRef={(input) => this.description = input } componentClass="textarea" placeholder="Enter description of this server" />
          </FormGroup>

          <FormGroup controlId="inputProcessor">
            <ControlLabel>Processor</ControlLabel>
            <FormControl  inputRef={(input) => this.processor = input } type="text" placeholder="Enter Processor"/>
          </FormGroup>

          <FormGroup controlId="textareaHDD">
            <ControlLabel>HDD</ControlLabel>
            <FormControl inputRef={(input) => this.hdd = input } componentClass="textarea" placeholder="Enter HDD" />
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

          <Link to={{pathname : '/servers'}}>
            <Button type="submit" onClick={this.addServer.bind(this)} bsStyle='success' >+ Add Server</Button>
          </Link>
          
        </div>
        );
    }
}
