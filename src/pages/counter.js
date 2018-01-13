import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1
    });
  }

  countDown() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={this.countUp}>plus</button>
        <button onClick={this.countDown}>minus</button>
      </div>
    );
  }
}

export default Counter;
