import React, { Component }  from 'react';
import SideBar from './SideBar';
import Navigation from './Navigation';

export default class App extends Component{
  render(){
    return(
      <div className='App'>
        <Navigation />
        <SideBar />
      </div>
    );
  }
}