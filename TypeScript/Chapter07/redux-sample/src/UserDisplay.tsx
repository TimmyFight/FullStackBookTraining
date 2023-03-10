import React from "react";
import {AppState} from "./store/AppState";
import {useSelector} from "react-redux";

const UserDisplay = () => {
  const user = useSelector((state: AppState) => state.user);

  if(user) {
    return (
      <>
        <div>
          <label>User name:</label>
          &nbsp;{user.userName}
        </div>
        <div>
          <label>User email:</label>
          &nbsp;{user.email}
        </div>
        <div>
          <label>User city:</label>
          &nbsp;{user.city}
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default UserDisplay;
