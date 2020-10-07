import React, { useState } from "react";

export default function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increaseByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
 <button onClick={() => setCount(initialCount)}>Reset</button>
      <button
        onClick={() =>
          setCount((prevCount) => (prevCount === 0 ? initialCount : prevCount -1 ))
        }>
       
        Decrement -
      </button>
      <strong>Count: {count}</strong>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment +
      </button>
      <button onClick={increaseByFive}>Increase 5</button>
    </div>
  );
}
