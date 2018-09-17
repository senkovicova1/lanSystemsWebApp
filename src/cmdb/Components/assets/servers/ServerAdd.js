import React from 'react';
import base from '../../../../firebase';
import firebase from 'firebase';
import AddNICModalForm from './AddNICModalForm';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import { Button, FormGroup, ControlLabel, FormControl, Modal } from 'react-bootstrap';
import AutoSuggest from 'react-bootstrap-autosuggest';
import Select from 'react-select';

export default class ServerAdd extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        companies : {},
        modalOpen : false,
        nics : {},
        types : {},
        statuses : {},
        places : [],

        openEdit : false,

        place : null,
      }
      this.addServer.bind(this);
      this.renderEditable.bind(this);
      this.handleDeleteNIC.bind(this);

      this.placeId = null;
  }

  componentDidMount(){
    this.ref = base.bindToState(`cmdb-servers`, {
      context: this,
      state: 'lastServer',
      asArray: true,
      queries: {
        orderByChild: 'id',
        limitToLast: 1
      }
    });

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

    this.ref5 = base.bindToState(`cmdb-places`, {
      context: this,
      state: 'places',
      asArray: true,
    });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref1);
      base.removeBinding(this.ref2);
      base.removeBinding(this.ref3);
      base.removeBinding(this.ref4);
  }

  addServer(){
    if (this.name.value.length < 1) return;
    const ID = this.state.lastServer.length>0?this.state.lastServer[0].id+1:0;
    firebase.database()
            .ref(`cmdb-servers/${ID}`)
            .set({
              id: ID,
              serverName : this.name.value,
              companyName : this.company.value,
              description: this.description.value,
              serverFunction: this.serverFunction.value,
              processor: this.processor.value,
              hdd: this.hdd.value,
              type : this.type.value,
              status : this.status.value,
              placeId : this.placeId,
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
    const DATA_NIC = Object
                  .values(this.state.nics)
                  .filter(val => val.serverID === this.state.id);
    const COLUMNS_NIC = [
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
      const DATA_PLACES = this.state.place === null ? [] : [this.state.place];
      const COLUMNS_PLACES = [
              {
                Header: 'Room',
                accessor: 'room',
              }, {
                Header: 'Street',
                accessor: 'street',
              },{
                Header: 'City',
                accessor: 'city',
              }, {
                Header: 'State',
                accessor: 'state',
              }, {
                Header: '',
                accessor: 'edit',
                Cell : row => {
                      return (
                          <div>
                            <Button bsSize='small' bsStyle='warning' onClick={() => this.setState({openEdit:true})}>Change</Button>
                            <Button bsSize='small' bsStyle='danger' onClick={() => this.setState({place : null})}>No location</Button>
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

          <FormGroup controlId="selectType">
            <ControlLabel>Select type</ControlLabel>
              <FormControl componentClass="select" placeholder="select" inputRef={(input) => this.type = input}>
                {
                  Object.keys(this.state.types)
                        .map(c => <option key={c} value={this.state.types[c].typeName}> {this.state.types[c].typeName} </option> )
                }
              </FormControl>
          </FormGroup>

          <FormGroup controlId="selectStatus">
            <ControlLabel>Select status</ControlLabel>
              <FormControl componentClass="select" placeholder="select" inputRef={(input) => this.status = input}>
                {
                  Object.keys(this.state.statuses)
                        .map(c => <option key={c} value={this.state.statuses[c].statusName}> {this.state.statuses[c].statusName} </option> )
                }
              </FormControl>
          </FormGroup>

          <FormGroup controlId="inputFunction">
            <ControlLabel>Function</ControlLabel>
            <FormControl  inputRef={(input) => this.serverFunction = input } type="text" placeholder="Enter Server Function"/>
          </FormGroup>

          <FormGroup controlId="textareaDescription" >
            <ControlLabel>Description</ControlLabel>
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

          <FormGroup controlId="textareaHDD">
            <ControlLabel>NICs</ControlLabel>
              <ReactTable
                data={DATA_NIC}
                columns={COLUMNS_NIC}
                defaultPageSize={5}
                className="-striped -highlight"
                showPagination={false}
              />

              <AddNICModalForm serverId={this.state.id}/>
          </FormGroup>

          <FormGroup controlId="textareaHDD">
            <ControlLabel>Location</ControlLabel>
              {
                this.state.place !== null &&
                <ReactTable
                  data={DATA_PLACES}
                  columns={COLUMNS_PLACES}
                  defaultPageSize={1}
                  showPagination={false}
                />
            }

              {this.state.place === null &&
                <div>
                <Button bsStyle="success" bsSize='small' onClick={() => this.setState({openEdit:true})}> Choose location of server </Button>
                </div>
              }

              <Modal bsSize='large' show={this.state.openEdit} onHide={()=>{this.setState({openEdit:false})}}>
                <Modal.Header closeButton>
                  <Modal.Title>Locations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FormGroup controlId="selectplace">
                    <ControlLabel>Select place</ControlLabel>

                      <Select
                        options={this.state.places.map((place)=>{
                          place.value=place.id;
                          place.label=place.state + ', ' + place.city + ', ' + place.street + ', ' + place.room;
                          return place;
                        })}
                        value={this.state.place}
                        onChange={e =>{ this.setState({ place: e })}}
                        />

                      <Button onClick={() => this.setState({openEdit:false})}> Close </Button>

                  </FormGroup>
                </Modal.Body>
              </Modal>

          </FormGroup>

          <Link to={{pathname : '/cmdb/servers'}}>
            <Button type="submit" onClick={this.addServer.bind(this)} bsStyle='success' >+ Add Server</Button>
          </Link>

        </div>
        );
    }
}
