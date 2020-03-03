import React, { Component } from 'react';
import './App.css';
import Resume from './Resume';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Profile />
        <Resume />
      </div>
    );
  }
}

export default App;
