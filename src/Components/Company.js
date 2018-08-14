import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Company extends Component{

  render() {
    return (
      <tr>
        <td>{this.props.company.companyName}</td>
        <td>
          <Button bsStyle='warning' }>Edit</Button>
        </td>
      </tr>
    )
  }

}
