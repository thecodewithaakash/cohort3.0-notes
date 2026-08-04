import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../features/counterSlice";

const HomePage = () => {
  // state of whole application
  // const appState = useSelector((state) => state); // read only
  // console.log(appState);

  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const [countPayload,setCountPayload] = useState(0);

  return (
    <div>
      <h1>Home page</h1>
      <p>count is {count}</p>
      <div className="flex gap-2 m-2">
        <button className="border rounded p-2" onClick={() => dispatch(decrement())}>decrement</button> 
        <button className="border rounded p-2" onClick={() => dispatch(increment())}>
          increment
        </button>
      </div>
      <input className="border rounded mx-2" type="text" placeholder="Enter count" value={countPayload} onChange={(e) => setCountPayload(e.target.value)} />
      <button className="border rounded p-2" onClick={() => dispatch(incrementByValue(countPayload))}>Add to count</button>
    </div>
  );
};

export default HomePage;
