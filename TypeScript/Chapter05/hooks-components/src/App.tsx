import React, {useReducer, useCallback, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import GreetingFunctional from './GreetingFunctional';
import ListCreator, {ListItem} from './ListCreator';

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

  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);
  const [listItems, setListItems] = useState<Array<ListItem>>();

  const setCountCallback = useCallback(() => {
    const inc = count +1 > startCount ? count +1 : Number(count + 1) + startCount;
    setCount(inc);
  }, [count, startCount]);

  const onWelcomeBtnClick = () => {
    setCountCallback();
  }

  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value));
  }

  useEffect(() => {
    const li = [];
    for(let i = 0; i < count; i++) {
      li.push({ id: i });
    }
    setListItems(li);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GreetingFunctional
          message={message}
          enteredName={enteredName}
          greetingDispatcher={dispatch} />

          <div style={{marginTop: '10px'}}>
            <label>Write a number and increment it</label>
            <br />
            <input value={startCount}
              onChange={onChangeStartCount}
              style={{width: '.75rem'}} />&nbsp;
            <label>{count}</label>
            <br />
            <button onClick={onWelcomeBtnClick}>Increment number</button>
          </div>
          <div>
            <ListCreator listItems={listItems} />
          </div>
      </header>
    </div>
  );
}

export default App;
