import React, { Component } from "react";
import Counter2 from "./03/Counter2";
import Counter3 from "./03/Counter3";
import Input from "./03/Input";
import ScrollSpy from "./03/ScrollSpy";

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }*/
  render() {
    return (
      //<Counter2 count={this.state.count} onAdd={this.increaseCount.bind(this)} />
      //<ScrollSpy />
      //<Counter3 />
      <Input />
    );
  }
}

export default App;
