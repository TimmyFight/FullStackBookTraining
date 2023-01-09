import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Gretting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="John" />
      </header>
    </div>
  );
}

export default App;
