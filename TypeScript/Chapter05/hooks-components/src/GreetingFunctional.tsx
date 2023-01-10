interface GreetingProps {
  message: string
}

export default function Greeting(props: GreetingProps) {
  console.log("Rendering functional Greeting component");

  return <div>{props.message}</div>;
}
