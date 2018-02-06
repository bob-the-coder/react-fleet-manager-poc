import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/input.css';
import './css/table.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import InquiryForm from './home/InquiryForm.js'
import Tabs from './Tabs.jsx';
import Menu from './js/menu.js';
import TripTable from './trips/trips.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Menu />
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <span className="app-title">R!der</span>
          </header>
          <div className="app-body">
            <Route exact path='/' component={Tabs}/>
            <Route exact path='/plan' component={InquiryForm}/>
            <Route exact path='/trips/planned' component={TripTable} />
            <Route exact path='/trips/upcoming' component={TripTable} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
