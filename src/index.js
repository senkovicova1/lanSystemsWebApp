import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import MyTable from './Components/MyTable';
import AddServerForm from './Components/AddServerForm';
import EditServerForm from './Components/EditServerForm';
import {BrowserRouter, Route} from 'react-router-dom';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/' component={App} />
        <Route exact path='/servers' component={MyTable} />
        <Route exact path='/servers/add' component={AddServerForm} />
        <Route exact path='/servers/edit/:id' component={EditServerForm} />
    {/*    <Route path='/Companies' component={MyTable} />*/}
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
