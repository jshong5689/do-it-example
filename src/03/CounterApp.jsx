import React, { Component } from "react";
import Counter2 from "./Counter2";

class CounterApp extends Component {
  render() {
    return <Counter2 count={this.state.count} onAdd={this.increaseCount} />;
  }
}

export default CounterApp;
