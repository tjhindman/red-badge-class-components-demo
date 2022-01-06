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

  componentDidMount() {
    // after render() when component is loaded to page
    if (this.props.count) {
      this.setState({ count: this.props.count });
    }

    if (this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // after previous props or state have been changed
    // need "if" comparison of "prevState/prevProps" surrounding "update" logic
    if (prevState.count !== this.state.count) {
      if (this.state.count === 0) {
        this.setState({
          status: this.props.status ? this.props.status : "Happy",
        });
      } else if (this.state.count < 0) {
        this.setState({ status: "Don't be a Patrick!" });
      } else if (this.state.count > 5) {
        this.setState({ status: "You're a good noodle!" });
      }
    }
  }

  componentWillUnmount() {
    // right before component is taken from page view
    // typically used for clean up functions: clearInterval(), cleaning up subscriptions,
    // cancelling network requests, etc.
    console.log(`Goodbye ${this.props.name}!`);
  }

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
