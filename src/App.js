import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './theme.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <span className="app-title">R!der</span>
          </header>
          <div className="app-body">
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
