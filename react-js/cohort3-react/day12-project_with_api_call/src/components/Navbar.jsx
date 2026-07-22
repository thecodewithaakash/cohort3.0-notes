import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

// const Navbar = ({setIsCartOpen}) => {
const Navbar = () => {
  let { setIsCartOpen } = useContext(MyStore);

  // ### understanding spread operator
  // const data = { name: "Aakash", age: 20, role: "Frontend Engineer" };
  // const arr = { ...data, exp: "2 years+" };
  // console.log(arr);

  return (
    <div className="bg-black rounded p-5 flex items-center justify-between">
      <div>logo</div>
      <div className="flex gap-10 text-xl">
        <p onClick={() => setIsCartOpen(false)} className="cursor-pointer">
          Home
        </p>
        <p onClick={() => setIsCartOpen(true)} className="cursor-pointer">
          Cart
        </p>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
