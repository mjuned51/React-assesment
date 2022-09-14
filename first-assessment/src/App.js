import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter Number</h1>
      <h2>{count}</h2>

      {/*  when we click any of the three Buttons 
            our Count state will change from its 
            initial state. */}
      <button className='btn' onClick={() => setCount(count + 1)} >Increament</button> 
      <button className='btn' onClick={() => setCount(count - 1)}>Decreament</button>
      <button className='btn' onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
