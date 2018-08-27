import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import SideBar from './Components/SideBar';
import Navigation from './Components/Navigation';

import MyTable from './Components/MyTable';
import AddServerForm from './Components/AddServerForm';
import EditServerForm from './Components/EditServerForm';
import AddCompanyForm from './Components/AddCompanyForm';
import EditCompanyForm from './Components/EditCompanyForm';
import {BrowserRouter, Route} from 'react-router-dom';

import './style.css';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/' component={Navigation} />
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
