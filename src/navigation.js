import React, {Component} from 'react';
import PageHeader from './PageHeader';
import Reroute from './reroute';
import CMDBNavigation from './cmdb/navigation';
import LanWikiNavigation from './lanWiki/navigation';

import {Route} from 'react-router-dom';


export default class Navigation extends Component {
  render(){
    return(
      <div>
        <PageHeader {...this.props}/>
          <div>
            <Route exact path='/' component={Reroute} />
            <Route path='/cmdb' component={CMDBNavigation} />
            <Route path='/lanwiki' component={LanWikiNavigation} />
         </div>
      </div>
    )
  }
}
