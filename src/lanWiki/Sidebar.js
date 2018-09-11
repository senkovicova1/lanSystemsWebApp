import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Tags extends Component{

  render(){
    const TAGS = {
      a: 'All',
      b: 'Linux',
      c: 'Windows',
      d: 'Config lists',
      e: '+ Tag'
    };
    console.log(this.props);
    return (
            <ListGroup className='sidebar'>
              {
                  Object
                    .keys(TAGS)
                    .map(asset =>
                      {
                        return(
                          <Link className='link' to={{pathname: `/lanwiki/articles`}}  key={TAGS[asset]}>
                            <ListGroupItem className='sidebarItem' key={TAGS[asset]} >
                              {TAGS[asset]}
                            </ListGroupItem>
                          </Link>)
                      })
                }
              </ListGroup>
          );

  }
}
