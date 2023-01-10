import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import GreetingFunctional from './GreetingFunctional';

const reducer = (state: any, action: any) => {
  console.log("enteredNameReducer");
  switch(action.type) {
    case "enteredName":
      if(state.enteredName === action.payload) {
        return state;
      }
      return {...state, enteredName: action.payload}
    case "message":
      return {...state, message: `Welcome ${action.payload}`}
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

const initialState = {
  enteredName: '',
  message: ''
}

function App() {
  const[{message, enteredName}, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GreetingFunctional
          message={message}
          enteredName={enteredName}
          greetingDispatcher={dispatch} />
      </header>
    </div>
  );
}

export default App;
