import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import MyTable from './Components/MyTable';
import {BrowserRouter, Route} from 'react-router-dom';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path='/home' component={App} />
        <Route path='/Servers' component={MyTable} />
        <Route path='/Companies' component={MyTable} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
