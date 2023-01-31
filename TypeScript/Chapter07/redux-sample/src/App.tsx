import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import { POST_TYPE } from './store/PostReducer';
import { USER_TYPE } from './store/UserReducer';
import UserDisplay from './UserDisplay';
import PostDisplay from './PostDisplay';

function App() {
  const [userId, setUserID] = useState(0);
  const [postId, setPostId] = useState(0);
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

  const onChangePostId =async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = e.target.value ? Number(e.target.value) : 0;
    setPostId(postIdFromInput);

    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/' + postIdFromInput);
    if(postResponse.ok) {
      const post = await postResponse.json();
      console.log("Post: ", post);

      dispatch({
        type: POST_TYPE,
        payload: {
          id: post.id,
          title: post.title,
          body: post.body
        }
      })
    }
  }

  return (
    <>
      <div className="App">
        <label>User ID</label>
        <input value={userId} onChange={onChangeUserId} />
        <UserDisplay />
      </div>
      <div className="App">
        <label>Post ID</label>
        <input value={postId} onChange={onChangePostId} />
        <PostDisplay />
      </div>
    </>
  );
}

export default App;
