import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-4 flex items-center justify-between bg-black text-white rounded">
      <div>
        <img
          className="rounded-full"
          width={35}
          src="https://i.pinimg.com/736x/e6/cf/53/e6cf53cc70e559aad01c9e0f63ee1a0d.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact </p>
      </div>
      <button
        className="p-2 bg-blue-700 text-white cursor-pointer rounded"
        onClick={() => setToggle((prev) => !prev)}
      >
        Create user
      </button>
    </div>
  );
};

export default Navbar;
