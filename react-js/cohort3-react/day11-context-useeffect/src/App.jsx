import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { ContextProvider, MyStore } from "./context/MyContext";
import axios from "axios";

const App = () => {
  // this will runs every time whenever the App component re-renders because it's called inside main function body of the App component.
  // So, whenever the state changes and the component re-renders, this line will execute again.
  console.log("App rendering...");

  // const [count, setCount] = useState(0);
  // ### context api
  // const { count, setCount } = useContext(MyStore);

  // const data = useContext(MyStore);
  // console.log(data); // undefined because the App component is not wrapped with ContextProvider in main.jsx, so the context value is not available here.

  // ### understanding useEffect and re-rendering
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [apiData, setApiData] = useState(null);
  console.log("apidata", apiData);

  // syntax: useEffect(callback, [optional dependencies array])
  // useEffect is asynchronous, it runs after the render is committed to the screen.
  // It does not block the browser from updating the screen.

  // useEffect(() => {
  //   console.log("App useEffect running...");
  // }, []); // it runs only once after the first render because the dependency array is empty.

  // ### but if i remove the dependency array then it will run after every render

  // useEffect(() => {
  //   console.log("App useEffect running...");
  // }); // it runs after every render because the dependency array is not provided.

  // useEffect(() => {
  //   console.log("App useEffect running...");
  // }, [count]); // it runs after every render when the count state changes because the dependency array contains count.

  // useEffect(() => {
  //   console.log("App useEffect running...");
  //   console.log("heyy..");
  // }, [toggle]); // it runs after every render when the toggle state changes because the dependency array contains toggle.


  // useEffect(() => {
  //   console.log("UseEffect: App Rendering...");
  // },[])

  let getData = async () => {
    // this code return Promsie so we need to wrap in async function.
    let res = await axios.get("https://fakestoreapi.com/products");

    // without useEffect this leads to infinite recursion so we need to wrap getData function insde useEffect
    // due to setApiData -> triggers infinite re-rendering
    setApiData(res.data);
  };

  // without useEffect this leads to infinite recursion so we need to wrap getData function insde useEffect
  // getData()

  useEffect(() => {
    // // useEffect prevents infinite re-render loop
    getData();
  }, []);

  return (
    <div>
      {/* rendering flow: App rendering... -> Context rendering... --> Home rendering --> About rendering --> Contact rendering */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}
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
      {/* <ContextProvider> */}
      {/* 👉 This makes it clear: click → setCount → Context re-renders → all subscribed components re-render with new value. */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* </ContextProvider> */}
      {/* but if i put <Contact /> here then it will not re-render during context re-render */}
      {/* <Contact /> */}
      {/* ### understanding useEffect and re-rendering */}
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button> <br />
      <button onClick={() => setToggle((prev) => !prev)}>
        Change toggle state
      </button>

      {/* Flow: whenever toggle changes : if toggle(true) -->  for Contact Page
          App rendering... --> top most console --> running during rendering of App component
          Contact rendering... -
          ###  After render finishes, useEffect runs:
          App useEffect running...
          heyy..
     */}
      {/* 
      ### Flow: if toggle(false) --> for About Page
          App rendering...
          About rendering...
          ###  After render completes, useEffect runs:
          App useEffect running...
          heyy.. 
   */}
      {toggle ? <Contact /> : <About />}
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

/*
### Understanding useEffect:

useEffect Hook:
- Used for handling side effects (API calls, subscriptions, DOM updates, timers, etc.)

React Component Lifecycle:
1) Mounting phase(known as componentDidMount ) → component renders for the first time - inside render tree.
2) Updating phase(known as componentDidUpdate ) → component re-renders(update) when state/props change.
3) Unmounting phase(known as componentWillUnmount) → component is removed from the DOM(Tree).

useEffect + Lifecycle:
- useEffect(() => { ... }, []) → runs once after initial mount.
- useEffect(() => { ... }, [deps]) → runs after updates when dependencies change.
- useEffect(() => { return () => {...} }, []) → cleanup runs during unmount.

Think of `useEffect` as the **bridge between React’s declarative rendering and imperative side effects**:

- **Mount (first render):** `useEffect` with empty `[]` runs once → perfect for fetching data or setting up listeners.  
- **Update (state/prop change):** `useEffect` with `[deps]` runs whenever those dependencies change → ideal for reacting to user input or prop updates.  
- **Unmount (component removal):** the cleanup function inside `useEffect` runs → great for clearing timers, unsubscribing, or removing event listeners.  

- **Mounting phase** → also called **componentDidMount** in class components (runs after first render because useEffect is asynchronous).  
- **Updating phase** → also called **componentDidUpdate** (runs after state/prop changes).  
- **Unmounting phase** → also called **componentWillUnmount** (runs before removal).  
  👉  Mounting = *didMount*, Updating = *didUpdate*, Unmounting = *willUnmount*.  

-  React itself controls the render lifecycle (mount, update, unmount).
   useEffect does not change those phases — it simply runs *after render*
   to handle side effects (like fetch, subscriptions, DOM ops).
   So: lifecycle = React, side effects = useEffect. 


*/
