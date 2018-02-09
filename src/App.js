import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './theme.css';

import {
  Route,
  HashRouter
} from "react-router-dom";

import LoginForm from './login/login-form.js';
import TripPlanner from './trip/plan/trip-planner.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <span className="app-title">R!der</span>
          </header>
          <div className="app-body clearfix">
          	<div className='app-menu'></div>
          	<div className='app-content'>
          		<Route exact path='/' component={LoginForm} />
          		<Route exact path='/trip/plan' component={TripPlanner} />
          	</div>
          	<div className='app-side'></div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
