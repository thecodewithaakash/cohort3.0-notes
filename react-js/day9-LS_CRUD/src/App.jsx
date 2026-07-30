import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);

  //   const [users, setUsers] = useState( () =>{
  //     JSON.parse(localStorage.getItem("users"))
  //   }
  // );

  // // i got error because of "undefined" because we are not returning callback --> users : Uncaught TypeError: Cannot read properties of undefined (reading 'map').
  //   console.log(users);

  // const [users, setUsers] = useState(() => {
  //   return JSON.parse(localStorage.getItem("users"));
  // });

  // Uncaught TypeError: Cannot read properties of null (reading 'map') because localStorage return "null" if nothing exists...
  // console.log(users);

  // ### correct way

  // const [users, setUsers] = useState(() => {
  //   return JSON.parse(localStorage.getItem("users")) || [];
  //   // blank -> [] array is truthy value...
  // });

  // Better: prevent null upfront by initializing state from localStorage (fallback to []) so,no need of optional chaining(users?.map) --> null/undefined
  // optional chaining is a patch, proper initialization is the fix - so try to avoid optional chainings
  // const [users, setUsers] = useState(
  //   () => JSON.parse(localStorage.getItem("users")) || [],
  // );

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );
  const [updatedData, setUpdatedData] = useState(null);

  const deleteUser = (id) => {
    // sync code
    let filterUser = users.filter((val, index) => {
      return val.id !== id;
    }); 
    console.log(filterUser);
    setUsers(filterUser); // async code
    localStorage.setItem("users", JSON.stringify(filterUser)); // sync code
  };

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {/* // users?.map → optional chaining, runs map only if users is not null/undefined. */}
          {users?.map((elem,index) => {
            return (
              <Usercard
                // index={index}
                setUpdatedData={setUpdatedData}
                deleteUser={deleteUser}
                // key={index} // - Using index as key is bad practice because it breaks React’s diffing, causing bugs on re‑order or delete.
                key={elem.id}
                user={elem}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form
            updatedData={updatedData}
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
          />
        </div>
      )}
    </div>
  );
};

export default App;

// localStorage: persistent storage in the browser.
// - Stores up to ~5MB of data (varies by browser).
// - Only accepts string values (objects must be serialized, e.g., JSON.stringify).
// - Data persists even after page reload or browser restart.
// - localStorage: stores only string values in both setItem("string","string") and getItem("key:String").
// - JSON(Javascript Object Notation) is text formatter - JSON.strigify() and JSON.parse()
