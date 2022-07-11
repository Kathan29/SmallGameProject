import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

export default function App() {
  const [total, setTotal] = useState(0);
  const [noOfClick, setNoOfClick] = useState(0);
  

  const incr = (no) => {
    setTotal(total + no);
    setNoOfClick(noOfClick + 1);
  };


  const refresh = () =>
  {
    setNoOfClick(0);
    setTotal(0);
  }
  return (
    <div className="App">
     
      <h1>  Welcome to the game</h1>
      
        
        <p className="content">
         You can click any of the 3 buttons out of 9 and if total is odd  you will win  or you will lose
      </p>
      <p className="content">
      This 9 buttons contain the value from 0-9 in random order.
      </p>
      <h1>{total}</h1>
      {noOfClick <= 2 && (
        <>
          <div className="buttons">
            <Button incr={incr} count={2} />
            <Button incr={incr} count={5} />
            <Button incr={incr} count={8} />
            <Button incr={incr} count={3} />
            <Button incr={incr} count={6} />
            <Button incr={incr} count={9} />
            <Button incr={incr} count={4} />
            <Button incr={incr} count={1} />
            <Button incr={incr} count={0} />
          </div>
        </>
      )}

      {noOfClick > 2 ? total %2 !== 0 ? <p>you won</p> : <p>you lose</p> : <></>}
      <button onClick={refresh} class="btn btn-danger" style={{position:'relative',margin:50}}>ReStart</button>
    </div>
  );
}
