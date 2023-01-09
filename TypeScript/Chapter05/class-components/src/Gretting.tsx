import React from 'react';

interface GreetingProps {
  name?: string;
}
interface GreetingState {
  message: string;
}

export default class Greeting extends React.Component<GreetingProps, GreetingState> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      message: Greeting.getNewMessage(props.name)
    }
  }

  state: GreetingState;

  static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
    console.log(props, state);
    if(props.name && props.name !== state.message) {
      const newSate = {...state};
      newSate.message = Greeting.getNewMessage(props.name);
      return newSate;
    }
    return state;
  }

  static getNewMessage(name: string = "") {
    return `Welcome in Greeting class component, ${name}`;
  }

  render() {
    console.log("Rendering Greeting Component");
    if(!this.props.name) {
      return <div>Name does not exist!</div>
    }
    return <div>{this.state.message}</div>
  }
}
