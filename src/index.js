import React from 'react';
import ReactDOM from 'react-dom';

import SideBar from './Components/SideBar';
import Header from './Components/Header';

import MyTable from './Components/MyTable';
import AddServerForm from './Components/assets/servers/AddServerForm';
import EditServerForm from './Components/assets/servers/EditServerForm';
import AddCompanyForm from './Components/assets/companies/AddCompanyForm';
import EditCompanyForm from './Components/assets/companies/EditCompanyForm';
import {BrowserRouter, Route} from 'react-router-dom';

import './style.css';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/' component={Header} />
        <Route path='/' component={SideBar} />
        <Route exact path='/servers' component={MyTable} />
        <Route exact path='/servers/add' component={AddServerForm} />
        <Route exact path='/servers/edit/:id' component={EditServerForm} />
        <Route exact path='/companies' component={MyTable} />
        <Route exact path='/companies/add' component={AddCompanyForm} />
        <Route exact path='/companies/edit/:id' component={EditCompanyForm} />
        <Route exact path='/tasks' component={MyTable} />
    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
