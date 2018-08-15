//import base from './base';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Server extends Component{

  render() {
    return (
      <tr>
        <td>{this.props.server.serverName}</td>
        <td>{this.props.server.companyName}</td>
        <td>
          <Link to={{pathname: `servers/edit/${this.props.server.id}`}}>
            <Button bsStyle='warning'>Edit</Button>
          </Link>
        </td>
      </tr>
    )
  }

}
