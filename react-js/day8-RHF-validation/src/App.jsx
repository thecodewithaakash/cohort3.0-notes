import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/UserCard";
import Form from "./components/Form";
import { useForm } from "react-hook-form";

const App = () => {
  const [toggle, setToggle] = useState(false);
   const [users,setUsers] = useState([]);

  // why react hook form runs twice in component ? 
  // - because of react strict mode, it runs twice in development mode to help identify side effects. It does not run twice in production mode.

  return (
    <div className="p-3 h-screen flex flex-col gap-4 bg-black">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex gap-4">
          {users.map((user, index) => (
            <Usercard key={index} user={user}  setToggle={setToggle}/>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70%]">
          <Form
           setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
