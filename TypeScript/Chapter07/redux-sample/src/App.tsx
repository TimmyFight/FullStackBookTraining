import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import { USER_TYPE } from './store/UserReducer';

function App() {
  const [userId, setUserID] = useState(0);
  const dispatch = useDispatch();

  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log("userId: ", e.target.value);
    setUserID(userIdFromInput);

    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if(userResponse.ok) {
      const users = await userResponse.json();
      console.log("users: ", users);
      const userFound = users.find((userItem: any) => {
        return userItem && userItem.id === userIdFromInput;
      });

      dispatch({
        type: USER_TYPE,
        payload: {
          id: userFound.id,
          userName: userFound.username,
          email: userFound.email,
          city: userFound.address.city
        }
      });
    }
  };

  return (
    <div className="App">
      <label>User ID</label>
      <input value={userId} onChange={onChangeUserId} />
    </div>
  );
}

export default App;
