import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import logo from './logo.svg';
import './App.css';
import './theme.css';

import {
  Route,
  HashRouter
} from "react-router-dom";

import LandingPage from './landing/landing.js';
import Menu from './menu/menu.js';
import LoginForm from './login/login-form.js';
import TripPlanner from './trip/plan/trip-planner.js';
import TripPlannerControls from './trip/plan/trip-planner-controls.js';

class App extends Component {
  render() {
  	return (
      <HashRouter>
      	<MuiThemeProvider>
	      	<div className="app">
	        	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"></link>
	        	<a href='/#/'>
					<header className="app-header">
						<img src={logo} className="app-logo" alt="logo" />
						<span className="app-title">R!der</span>
					</header>
				</a>
				<div className="app-body clearfix">
					<div className='app-menu'>
						<Route exact path='/' component={LandingPage}/>
						<Menu />
					</div>
					<div className='app-content margin-top-70'>
						<Route exact path='/login' component={LoginForm} />
						<Route exact path='/trip/plan' component={TripPlanner} />
					</div>
					<div className='app-side margin-top-70'>
						<Route exact path='/trip/plan' component={TripPlannerControls} />
					</div>
				</div>
	        </div>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
