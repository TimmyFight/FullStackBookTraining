import {FC, useState, useEffect} from 'react';

interface GreetingProps {
  name?: string;
}

const Greeting: FC<GreetingProps> = ({name}: GreetingProps) => {
  const [message, setMessage] = useState('');


  useEffect(() => {
    if(name) {
      setMessage(`Welcome with Greeting functional component, ${name}`);
    }
  }, [name]);

  if(!name) {
    return <div>Name is undefined.</div>
  }

  return (
    <div>{message}</div>
  );
}

export default Greeting;
