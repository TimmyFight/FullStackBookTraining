import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import SecondScreen from './SecondScreen';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/second" element={<SecondScreen />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
