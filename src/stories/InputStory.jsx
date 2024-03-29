import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Input from "../03/Input";

storiesOf("Input", module)
  // .add('기본설정', () => <Input name="name" />)
  //.add('label 예제', () => <Input name="name" label="이름" />)
  //.add('onchange 예제', () => <Input name="name" onChange={action('onChange 이벤트 발생')} />);
  .addWithJSX("기본설정", () => <Input name="name" />)
  .addWithJSX("label 예제", () => <Input name="name" label="이름" />)
  .addWithJSX("onchange 예제", () => (
    <Input name="name" onChange={action("onChange 이벤트 발생")} />
  ));
