import React, { Component } from "react";
import { storiesOf } from "@storybook/react";

import NewCounter from "../03/NewCounter";
storiesOf("NewCounter", module).add("기본설정", () => <NewCounter count={0} />);

class NewCounterStory extends Component {
  render() {
    return <div></div>;
  }
}

export default NewCounterStory;
