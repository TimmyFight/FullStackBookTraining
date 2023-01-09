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
      message: `Welcome in Greeting class component, ${props.name}`
    }
  }

  state: GreetingState;

  render() {
    if(!this.props.name) {
      return <div>Name does not exist!</div>
    }
    return <div>{this.state.message}</div>
  }
}
