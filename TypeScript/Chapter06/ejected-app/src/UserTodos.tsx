import React, {FC, useState, useEffect} from "react";

interface UserTodosProps {
  username : string;
}

const UserTodos: FC<UserTodosProps> = ({ username }) => {
  const [todos, setTodos] = useState();
  const [userExist, setUserExist] = useState(false);

  const setUsersTodos = async () => {
    console.log("Inside function UserTodos.setUsersTodos");
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    if(userResponse.ok) {
      const users = await userResponse.json();
      const userByName = users.find((user: any) => {
        return user.username === username;
      });
      console.log("User get by name: ", userByName);

      const todosResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (userByName && todosResponse.ok) {
        const todos = await todosResponse.json();
        const userTodos = todos.filter((todo: any) => {
          return todo.userId === userByName.id;
        });
        const todoList = userTodos.map((todo: any) => {
          return <li key={todo.id}>{todo.title}</li>;
        });
        setTodos(todoList);
        setUserExist(true);
        console.log("List of user tasks: ", userTodos);
      } else {
        setUserExist(false);
      }
    }
  };

  useEffect(() => {
    if (username) {
      setUsersTodos();
    }
  }, [username]); // eslint-disable-line react-hooks/exhaustive-deps

  return <ul style={{ marginTop: '1rem', listStyleType: 'none' }}> {userExist && todos } </ul>
}

export default UserTodos;
