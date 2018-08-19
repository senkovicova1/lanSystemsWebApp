import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Company extends Component{

  render() {
    return (
      <tr>
        <td>{this.props.asset.companyName}</td>
        <td>
          <Link to={{pathname: `companies/edit/${this.props.asset.id}`}}>
            <Button bsStyle='warning'>Edit</Button>
          </Link>
        </td>
      </tr>
    )
  }

}
