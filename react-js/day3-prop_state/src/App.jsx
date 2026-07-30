import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  let [flag, setFlag] = useState(true);
  console.log(flag);

  console.log("hello");

  return (
    <div>
      <h1>Count is - {count}</h1>

      <button
        onClick={() => {
          setCount(count + 4);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setFlag(false);
        }}
      >
        Change boolean
      </button>
    </div>
  );
};

export default App;
