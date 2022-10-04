import React, { Component } from 'react';
//import './App.css';
import Resume from './Resume';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <main className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl print:m-2 print:shadow-none">
        <div
          id="sidebar"
          className="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white print:p-2"
        >
          <Profile />
        </div>
        <div className="content w-full p-7 print:p-4">
          <Resume />
        </div>
      </main>
    );
  }
}

export default App;
