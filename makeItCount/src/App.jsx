import React, { useState } from 'react';
import Counter1 from './components/counter-1';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncreaseAll = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecreaseAll = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <Counter1 />
      <Counter1 />
      <Counter1 />
      <button onClick={handleIncreaseAll}>Increase all</button>
      <button onClick={handleDecreaseAll}>Decrease all</button>
    </div>
  );
}

export default App;
