import React, { useState } from "react";
import HookCounterTwo from "./HookCounterTwo";

export default function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <br />
      <HookCounterTwo />
    </div>
  );
}
