import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Home = () => {
  console.log("home rendering...");
  
  // here we got the context value from MyStore using useContext hook because 
  // we wrapped the Home component with ContextProvider in App.jsx file. so we can access the context value here.
  // let data = useContext(MyStore);
  // console.log(data); 

   let { count, setCount } = useContext(MyStore); 

  return (
    <div>
      <h1>Home page</h1>
      <h1>Hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Home;


/*
Initial render:
App.jsx:9 → App rendering...
MyContext.jsx:8 → Context rendering..
Home.jsx:5 → Home rendering...
About.jsx:6 → About rendering...
About.jsx:8 → { count: 0, setCount: ƒ }
Contact.jsx:5 → Contact rendering...
Contact.jsx:7 → { count: 0, setCount: ƒ }

After clicking "Increment" in Home.jsx:
MyContext.jsx:8 → Context re-rendering..
Home.jsx:5 → Home re-rendering...
About.jsx:6 → About re-rendering...
About.jsx:8 → { count: 1, setCount: ƒ }
Contact.jsx:5 → Contact re-rendering...
Contact.jsx:7 → { count: 1, setCount: ƒ }

Notes:
- Button in Home.jsx calls setCount(count + 1).
- State lives in Context → Provider re-renders.
- All consumers (Home, About, Contact) re-render with updated count.
- Flow shows how a single state update propagates through Context.
*/
