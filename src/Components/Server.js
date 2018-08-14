//import base from './base';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Server extends Component{

  render() {
    return (
      <tr>
        <td>{this.props.server.serverName}</td>
        <td>{this.props.server.companyName}</td>
        <td>
          <Button bsStyle='warning'
          onClick={  ()=>{this.props.update(this.props.server)}  }>Edit</Button>
        </td>
      </tr>
    )
  }

}
