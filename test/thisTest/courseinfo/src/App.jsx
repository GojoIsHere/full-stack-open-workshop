import { useState } from "react";
function App() {
  var mytext ="";
  const handleClick=(mytext)=>{
   console.log("check",mytext)
   
  }
  const handleChange = (e)=>{
    console.log(e.target.value)
    mytext = e.target.value;
  }
  return (
    <div>
      <input type="text"  id="text" onChange={(e)=> handleChange(e)} />
      <button onClick={() => handleClick(mytext)}>Click me</button>
      
    </div>
    
  );
}

export default App;
