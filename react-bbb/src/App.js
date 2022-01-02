import { useState } from "react";
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count +1);
  }
  
  return(
    <div className="App">
      <h1>Hello world</h1>
      <p>{count}</p>
      <button onClick={onClickCountUp}>countup</button>
    </div>
  );
}
