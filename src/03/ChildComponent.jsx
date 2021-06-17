import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildComponent extends Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } =
      this.props;

    return (
      <div>
        <div>----------ChildComponent----------</div>
        <span>불리언값: {boolValue}</span>
        <br />
        <span>숫자값: {numValue}</span>
        <br />
        <span>배열값: {arrayValue}</span>
        <br />
        <span>객체값: {String(objValue)}</span>
        <br />
        <span>노드값: {nodeValue}</span>
        <br />
        <span>함수값: {String(funcValue)}</span>
        <br />
        <div>----------ChildComponent----------</div>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
