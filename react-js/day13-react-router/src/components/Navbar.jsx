// import React from "react";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";

// ### Without NavLink & conditional rendering

// const Navbar = ({ toggle, setToggle }) => {
//   return (
//     <div className="h-screen p-2">
//       <nav className="flex justify-between items-center">
//         <h1>logo</h1>
//         <div className="flex gap-6 items-center cursor-pointer">
//           {/* <p onClick={() => setToggle(false)} >Home</p>
//         <p onClick={() => setToggle(true)}  >About</p> */}

//           <p onClick={() => setToggle("home")}>Home</p>
//           <p onClick={() => setToggle("about")}>About</p>
//           <p onClick={() => setToggle("contact")}>Contact</p>
//         </div>
//         <button>Login</button>
//       </nav>

//       <div>
//         {/* This is not ideal because ~ what if suppose we have multiple routes like in production web app - worst code */}
// {/* this is will lead to - re-rendering whenever paths changes */}
//         {toggle === "home" && <Home />}
//         {toggle === "about" && <About />}
//         {toggle === "contact" && <Contact />}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// ### with NavLink

import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1>logo</h1> 
      <div className="flex gap-6 items-center">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;

/* 
1. <Link>
- Purpose: Basic navigation between routes (like <a> but without page reload).
- Props: "to" → target path.
- Behavior: Changes URL + renders component, but does NOT add active styles.
- Example:
  <Link to="/about">About</Link>

2. <NavLink>
- Purpose: Special version of Link for navigation menus.
- Props: "to" → target path, plus styling props.
- Behavior: Adds styling when the link matches current URL.
- Props:
   - style={({ isActive }) => ...} → inline style based on active state.
   - className={({ isActive }) => ...} → conditional class.
- Example:
  <NavLink to="/about" 
           style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
    About
  </NavLink>

3. Key Differences
- Link = navigation only.
- NavLink = navigation + active state styling.
- Use Link for simple links, NavLink for menus/navbars.
*/
