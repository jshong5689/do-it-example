import React, { Component } from "react";

class BooleanComponent extends Component {
  render() {
    const message = this.props.bored ? "놀러 가자" : "하던 일 하자";
    return (
      <span className="message-container">
        {message}
        <br />
      </span>
    );
  }
}

export default BooleanComponent;
