import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './Components/Sidebar';
import PageHeader from './Components/PageHeader';

import ServerList from './Components/assets/servers/ServerList';
import ServerAdd from './Components/assets/servers/ServerAdd';
import ServerEdit from './Components/assets/servers/ServerEdit';
import CompanyList from './Components/assets/companies/CompanyList';
import CompanyAdd from './Components/assets/companies/CompanyAdd';
import CompanyEdit from './Components/assets/companies/CompanyEdit';
import TaskList from './Components/assets/tasks/TaskList';
import {BrowserRouter, Route} from 'react-router-dom';

import './style.css';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/' component={PageHeader} />
        <Route path='/' component={Sidebar} />
        <Route exact path='/servers' component={ServerList} />
        <Route exact path='/servers/add' component={ServerAdd } />
        <Route exact path='/servers/edit/:id' component={ServerEdit }/>
        <Route exact path='/companies' component={CompanyList} />
        <Route exact path='/companies/add' component={CompanyAdd} />
        <Route exact path='/companies/edit/:id' component={CompanyEdit} />
        <Route exact path='/tasks' component={TaskList} />
    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
