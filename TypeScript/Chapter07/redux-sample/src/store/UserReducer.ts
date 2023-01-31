export const USER_TYPE = "USER_TYPE";

export interface User {
  id: string;
  userName: string;
  email: string;
  city: string;
};

interface UserAction {
  type: string;
  payload: User | null;
}

export const UserReducer = (state: User | null = null, action: UserAction): User | null => {
  switch (action.type) {
    case USER_TYPE:
      console.log("UserReducer: ", action.payload);
      return action.payload;
    default:
      return state;
  }
}
