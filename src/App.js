import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tabs from './Tabs.jsx'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <span className="app-title">R!der</span>
        </header>
        <div className="app-body">
          <Tabs items={[]} />
        </div>
      </div>
    );
  }
}

export default App;
