import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './navigation';

import {BrowserRouter, Route} from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import 'react-table/react-table.css';

const Root = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' component={Navigation} />
        </div>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
