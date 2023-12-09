import React, { useState } from "react";
import Display from "./Display";
import HistoryDisplay from "./HistoryDisplay";
import MyButton from "./MyButton";
import Myh1 from "./Myh1";

const App = () => {
  const [myCount, setMyCount] = useState(1);
  const [clickButtonHistory, setClickButtonHistory] = useState([]);

  // const Adisplay = () => {
  //   return <h3>Do not create component inside component</h3>;
  // };

  console.log("calling");
  const increaseCountFromApp = () => {
    setMyCount(myCount + 1);
    // setClickButtonHistory([...clickButtonHistory, "App"]);
    setClickButtonHistory(clickButtonHistory.concat("App")); //[], ["App"]
    // setClickButtonHistory(clickButtonHistory.push("App")); //[], ["App"]
  };

  const increaseCountFromButton = () => {
    setMyCount(myCount + 1);
    setClickButtonHistory([...clickButtonHistory, "Button"]);
    // setClickButtonHistory([1, 2, 3, 4, "Button"]); //if clickButtonHistory = [1, 2, 3, 4], ["App", "Button"]
  };

  return (
    <div>
      <h3>{myCount}</h3>
      <Display showValue={myCount} />
      <HistoryDisplay history={clickButtonHistory} />
      <button onClick={increaseCountFromApp}>Click me in same component</button>
      <MyButton buttonHandler={increaseCountFromButton} />
      <Myh1 name="amir" lastName="some LastName1" count={myCount} />
      <Myh1 name="Niru" lastName="some LastName2" count={myCount} />
      <Myh1 name="Ashim" lastName="some LastName3" count={myCount} />
    </div>
  );
  // return React.createElement("div", {}, [Myh1(), Myh1(), Myh1(), Myh1()])
};

export default App;
