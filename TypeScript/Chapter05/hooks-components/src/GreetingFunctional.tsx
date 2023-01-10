import React from 'react';

interface GreetingFunctionalProps {
  enteredName: string;
  message: string;
  greetingDispatcher: React.Dispatch<{ type: string, payload: string }>;
}

export default function Greeting(props: GreetingFunctionalProps) {
  console.log("Rendering functional Greeting component");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.greetingDispatcher({type: 'enteredName', payload: e.target.value});
    props.greetingDispatcher({type: 'message', payload: e.target.value});
  }

  return (
    <>
      <input value={props.enteredName} onChange={onChangeName} />
      <div>{props.message}</div>
    </>
  );
}
