import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import MyTable from './Components/MyTable';
import AddServerForm from './Components/AddServerForm';
import EditServerForm from './Components/EditServerForm';
import AddCompanyForm from './Components/AddCompanyForm';
import EditCompanyForm from './Components/EditCompanyForm';
import {BrowserRouter, Route} from 'react-router-dom';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/' component={App} />
        <Route exact path='/servers' component={MyTable} />
        <Route exact path='/servers/add' component={AddServerForm} />
        <Route exact path='/servers/edit/:id' component={EditServerForm} />
        <Route exact path='/companies' component={MyTable} />
        <Route exact path='/companies/add' component={AddCompanyForm} />
        <Route exact path='/companies/edit/:id' component={EditCompanyForm} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
