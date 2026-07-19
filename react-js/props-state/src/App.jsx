// import React from 'react'
// import Contact from './components/props-state/contact'
// // import Three from './components/props-state/test'
// // import { Four } from './components/props-state/test'
// import Three,{Four} from './components/props-state/test'

// const App = () => {

//   // ### function call
//   // Contact()
//   // Three()
//   // Four()
//   return (
//     <div>
//       <h1>I am App</h1>
//       {/* calling component as simple javascript function call */}
//       {/* {Contact()} */}

//       {/* calling component as an jsx compiled function call, it helps in HMR */}
//       <Contact />
//       <Three/>
//       <Four />
//     </div>
//   )
// }

// export default App

// ### understanding components

// import React from 'react'
// import Navbar from './components/props-state/Navbar'
// import Hero from './components/props-state/Hero'
// import Footer from './components/props-state/Footer'

// export const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <Footer/>
//     </div>
//   )
// }

// export default App;

// ### understanding states

import React, { Component, useEffect, useState } from "react";

const App = () => {
  // let count = 10;

  //  Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') because we are accessing virtual element not dom element
  // const btn = document.querySelector('#btn')
  // console.log(btn); // null

  // btn.addEventListener('click',() => {
  //   count++;
  // })

  // const result = useState(0);
  // console.log(result);

  // const [state,setState] = useState();
  // state - actual/initial value
  // setState - function jo "state" ko update krta hai and parent component ko re-render bhi krta hai:
  // - it update own state
  // - re-render parent functional Component

  const [count, setCount] = useState(0);
  console.log('re-renders happen because of "setCount"', count);

  //  infinite recursion re-renders: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // setCount(count + 1)

  const [flag, setFlag] = useState(true);
  console.log(flag);

  return (
    <div>
      <h1>Count is - {count}</h1>
      {/* <button id="btn">increment</button> */}

      {/* ### inline events with local variable*/}

      {/* <button onClick={() =>{
         count++;
         console.log(count); 

         App() // reload
      }}>increment</button> */}

      {/* 
      ### Above code explanation:
        // let count = 0 → local variable, not React state
        // <h1>Count is - {count}</h1>
        // → Renders once with initial value (0)
        // → Will NOT update on re-render because count is not state

        // <button onClick={...}>increment</button>
        // → Inline event handler increments count and logs it
        // → Value changes in memory but React does not re-render
        // → UI stays stale since React only re-renders on state change

        // ✅ Correct way: use useState()
        // const [count, setCount] = useState(0);
        // onClick={() => setCount(count + 1)}
        // → Updates state → triggers re-render → UI reflects new count
        
        // count will increase but - “Using a plain variable won’t trigger re-renders.
        //  React only updates the UI when state changes, so useState must be used instead of a local variable.”

        // React re-render → updates the whole component tree when state/props change.
        // But in this code, count is just a local variable (not state).
        // onClick increments count and logs it,
        // → Only updates the variable in memory, not the UI.
        // → React does NOT re-render, so <h1> still shows the old value.
        // ✅ To update UI, use useState() so React triggers a re-render.


        // 🔄 Reload → Browser refreshes the entire page.
              // → All resources (HTML, CSS, JS) are re-fetched.
              // → Full page lifecycle restarts, state is lost.

        // 🔁 Re-render → React updates the Virtual DOM when state/props change.
              // → Only the affected components are re-rendered.
              // → Efficient diffing → minimal updates to the real DOM.
              // → Preserves app state without full page reload.
      */}

      {/* Re-renders */}
      {/* <button onClick={() => setCount(count+1)}>increment</button> */}

      {/* 
        <button onClick={() => setCount(count++)}>increment</button>
        In React functional components, state variables returned by useState (like count) are almost always declared as constants. The expression 
        count++ is shorthand for count = count + 1. Since count is a constant, the JavaScript engine throws a TypeError when it attempts to perform that assignment.
        */}

      {/* // Fix: Use count + 1 instead of count++ to avoid mutating the constant */}
      {/* <button onClick={() => setCount(count + 1)}>increment</button> */}

      {/* // Alternative: Use a functional update if the new state depends on the previous state */}
      {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button> */}

      {/* <button onClick={() => setFlag(false)}>change boolean</button> */}
      <button onClick={() => setFlag(true)}>change boolean</button>
    </div>
  );
};

export default App;

/* 
- hooks can only be called inside function component.

// 🔑 Rule: If you call setState with the same value → no re-render, no update.
// Example 1 (TRUE case):
// const [flag, setFlag] = useState(true);
// setFlag(true); 
// → Same value as current → React skips re-render.

// Example 2 (FALSE case):
// const [flag, setFlag] = useState(true);
// setFlag(false);
// → Value changes → React updates state and triggers re-render.

// ⚠️ Note: React may batch updates, so if you toggle values quickly,
// you might see multiple renders (e.g., true → false → true).
// But the principle remains: only a *different* value causes re-render.


*/
