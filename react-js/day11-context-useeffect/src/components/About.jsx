import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";

const About = () => {
  console.log("About rendering...");

  // const data = useContext(MyStore);
  // console.log(data);

  // memory leak because the interval is created every time the component re-renders and it never gets cleared,
  //  so it keeps running in the background even after the component is unmounted ~ memory leak...
  let interval = setInterval(() => {
    console.log("hey i m in about");
  }, 1000);

  useEffect(() => {
    //runs after render tree: mounting phase
    console.log("useEffect: About rendering...");

    // only use when your components leaks some memory
    //  and if you want to track any updates
    // controlling unmounting phase to prevent memory leaks

    // runs before unmounting phase
    return () => {
      clearInterval(interval);
      console.log("useEffect cleanup: About component unmounted");
    };
  }, []);

  return (
    <div>
      <h1>About page</h1>
    </div>
  );
};

export default About;

/* Flow:
   App rendering...              // mount
   About rendering...            // render
   useEffect: About rendering... // effect (runs after render)
   App useEffect running...      // effect
   heyy..                        // log
   UseEffect: App Rendering...   // effect
   hey i m in about              // log (interval part)

   Notes:
   - useEffect always runs once after initial render, even with a deps array.
   - [] → runs only once on mount.
   - [deps] → runs again whenever dependency changes.
   - cleanup (return (() => {})) → runs before re‑run or on unmount.
   ✅ Lifecycle: mount → render → effect → log → deps change → cleanup → re‑effect.
*/
