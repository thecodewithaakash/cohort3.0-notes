import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

// const Navbar = ({setIsCartOpen}) => {
  const Navbar = () => {
  let { setIsCartOpen } = useContext(MyShop);

  return (
    <div className="bg-black rounded p-5 flex items-center justify-between">
      <div>logo</div>
      <div className="flex gap-10 text-xl">

        {/* onClick={() => setIsCartOpen((prev) => !prev)} --> is not ideal for Cart logic */}
        {/* setIsCartOpen((prev) => !prev) → toggle logic (open if closed, close if open).
        setIsCartOpen(true) → explicitly open the cart regardless of current state. */}

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
