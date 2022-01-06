import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      status: "Happy",
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

//   10:10am EST!!!

  render() {
    return (
      <>
        <h3>
          {this.props.name}'s Gold Star Count: {this.state.count}
        </h3>
        <p>{this.state.status}</p>
        <button onClick={this.increment}>Add Star!</button>
        <button onClick={this.decrement}>Punish!</button>
      </>
    );
  }
}

export default Counter;
