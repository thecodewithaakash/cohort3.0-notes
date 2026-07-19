import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1>logo</h1>
      <div className="flex gap-6 items-center">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Home</NavLink>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
