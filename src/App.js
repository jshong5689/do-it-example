import "./App.css";
import React from 'react';
import JSXSsample from "./03/JSXSsample";
import TodaysPlan from "./03/TodaysPlan";
import PropsComponent from "./03/PropsComponent";
import ChildComponent from "./03/ChildComponent";
import BooleanComponent from "./03/BooleanComponent";
import ChildComponent2 from "./03/ChildComponent2";
import DefaultPropsComponent from "./03/DefaultPropsComponent";
import ChildProperty from "./03/ChildProperty";
import StateExample from "./03/StateExample";
import ForceUpdateExample from "./03/ForceUpdateExample";
import IncreaseTest from "./03/IncreaseTest";
import LifecycleExample from "./03/LifecycleExample";
import TotalCounter from "./03/TotalCounter";

function App() {
  var test = (arg) => {
    return `${arg}`;
  };

  console.log(test("test"));
  return (
    <div className="App">
      <div className="title">두잇!! </div>
      <JSXSsample />
      <TodaysPlan />
      <PropsComponent name="PropsComponent 프로퍼티 테스트" />
      <ChildComponent
        boolValue={true}
        numValue={1}
        arrayValue={[1, 2, 3]}
        objValue={{ name: "제목", age: 30 }}
        nodeValue={<h3>노드</h3>}
        funcValue={() => {
          console.log("메세지");
        }}
      ></ChildComponent>
      true Boolean 값 : <BooleanComponent bored />
      false Boolean 값 : <BooleanComponent />
      <ChildComponent2 objValue={{ age: 20 }} requiredStringValue="문자" />
      <DefaultPropsComponent />
      <ChildProperty>
        <div>
          <span>자식노드</span>
        </div>
      </ChildProperty>
      <StateExample />
      <ForceUpdateExample />
      <IncreaseTest />
      <LifecycleExample />
      <TotalCounter />
    </div>
  );
}

export default App;
