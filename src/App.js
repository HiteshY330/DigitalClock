import React, { useState } from "react";


const App = () =>{

  let time = new Date().toLocaleTimeString();

  const[cutime, setTime] = useState(time);

  const Time =() =>{
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  //clock
  const[cultime, ClockTime] = useState(time);
  const Clock =() =>{
    let ct = new Date().toLocaleTimeString();
    ClockTime(ct);
  };
  setInterval(Clock,1000);
  // clock end
  //const State = useState();

  const[count, setCount] = useState(0);

// like & dislick
const IncNum = () => {
  setCount(count + 1);
  //console.log("clicked "+ count ++);
};
const DecNum = () =>{
  setCount(count -1);
};
  return(
    <>
    <div className="divInc">
    <h1 >{count}</h1><br></br>
    <button onClick={IncNum}  className="buttonInc">Like</button>
    <br/>
    <button onClick={DecNum} className="buttonInc" >Dislike</button>
    </div>
    <div className="Curr">
    <h1 >{cutime}</h1>
    <button onClick={Time} className="buttonInc">Current Time</button>
    </div>
    <div className="Curr">
    <h1 >{cultime}</h1>
    </div>
    </>
  );
} 
export default App;