import React from 'react';
import logo from './logo.svg';
import './App.css';

import DisplayText from './DisplayText';

function App() {
  const getUserFullName = async (username: string): Promise<string> => {
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    if (userResponse.ok) {
      const users = await userResponse.json();
      const userByName = users.find((user: any) => {
        return user.username.toLowerCase() === username.toLowerCase();
      });
      return userByName ? userByName.name : "Unknown User";
    }
    return "";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DisplayText getUserFullName={getUserFullName} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
