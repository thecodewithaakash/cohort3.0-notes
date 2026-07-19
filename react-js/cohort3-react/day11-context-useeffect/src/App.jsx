import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { ContextProvider, MyStore } from "./context/MyContext";
import axios from "axios";

const App = () => {
  console.log("App rendering...");

  // const [count, setCount] = useState(0);

  // ### context api
  // const { count, setCount } = useContext(MyStore);

  // const data = useContext(MyStore);
  // console.log(data); // undefined because the App component is not wrapped with ContextProvider in main.jsx, so the context value is not available here.

  // const [toggle, setToggle] = useState(true);
  // const [apiData, setApiData] = useState(null);
  // console.log("apidata", apiData);

  // let getData = async () => {
  //   let res = await axios.get("https://fakestoreapi.com/products");

  //   setApiData(res.data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      {/* ### understanding re-rendering */}
      {/* <h1>Count is {count}</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <Home />
      <About />
      <Contact /> */}

      {/* ### understanding context api + re-rendering */}
      {/* rendering flow: context rendering... -> App rendering... --> Home rendering --> About rendering --> Contact rendering */}
      {/* you see first -> Context rendering... printed in browser console because -->  useState’s setFunction triggers re-render
             of the component where it is defined, not where it’s called.*/}
      {/*  the rendering process starts from the Context component. */}
      {/* <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home />
      <About />
      <Contact /> */}

      {/* <button onClick={() => setToggle((prev) => !prev)}>
        Change toggle state
      </button>  */}

      {/* here below code rendering flow: App rendering... -> Context rendering... --> Home rendering --> About rendering --> Contact rendering */}
      {/* ### Rendering flow (console output):

          App rendering...
          MyContext.jsx:8 → Context rendering...
          Home.jsx:5 → Home rendering...
          Home.jsx:10 → { count: 0, setCount: ƒ }
          About.jsx:6 → About rendering...
          About.jsx:8 → { count: 0, setCount: ƒ }
          Contact.jsx:5 → Contact rendering...
          Contact.jsx:7 → { count: 0, setCount: ƒ }

        Explanation:
        - The flow shows how React components re-render in sequence.
        - Context renders first, then App, followed by Home, About, and Contact.
        - Each child component logs both its render message and the context value { count, setCount }.
      */}
      <ContextProvider>
        {/* 👉 This makes it clear: click → setCount → Context re-renders → all subscribed components re-render with new value. */}
        <Home />
        <About />
        <Contact />
      </ContextProvider>

      {/* {toggle ? <Contact /> : <About />} */}
    </div>
  );
};

export default App;

// ### Notes Explanation:

/* 
- if parent component re-renders then all the child components will also re-render.
  - ex: App Rendering... => Home Rendering... => About Rendering... => Contact Rendering...
  - when setCount is called then App component re-renders and all the child components also re-render.

*/

/*
### React Context API Notes:
- Context is essentially a higher-order component for state sharing.
- Two main parts:
   1. Context (created via createContext)
   2. Provider (a function component that accepts children)

Example Provider:
const MyContext = createContext();

const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value={ shared data }>
      {children}
    </MyContext.Provider>
  );
};

- Consumer components can access the shared data via useContext(MyContext).
*/

/*
Provider Example:
- The Provider is the component that supplies data to its children.

const MyContext = createContext();

const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value={{ user: "Aakash" }}>
      {children}
    </MyContext.Provider>
  );
};

Consumer Example:
- The Consumer is any component that reads the data from Context.

const Profile = () => {
  const { user } = useContext(MyContext);
  return <h1>Hello, {user}</h1>;
};
*/

/*
Provider Example:
- The Provider is the component that supplies data to its children.

const MyContext = createContext();

const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value={{ user: "Aakash" }}>
      {children}
    </MyContext.Provider>
  );
};

Consumer Example:
- The Consumer is any component that reads the data from Context.

const Profile = () => {
  const { user } = useContext(MyContext);
  return <h1>Hello, {user}</h1>;
};
*/

// - **Provider** → wraps children and passes down data via the `value` prop.
// - **Consumer** → any component that uses `useContext(MyContext)` (or `<MyContext.Consumer>`) to access that data.
// 👉 In short: **Provider gives, Consumer takes.**
