import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

const App = () => {
  let dispatch = useDispatch(); // send actions to the reducer
  let { count } = useSelector((store) => store.counter); // read the state ~ read only
  // console.log(count);
  

  return (
    <div>
      <h1>My count is {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      {/* <button onClick={() => dispatch(increment("cheelllll"))}>
        Increment
      </button> */}
    </div>
  );
};

export default App;
