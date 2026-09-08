import React from "react";
import {useForm} from 'react-hook-form'

const Usercard = ({user,setToggle}) => {
  const {setValue} = useForm()

 const handleUpdate = () => {
  setToggle((prev) => !prev)
  // Set new values
    setValue("name", "Aakash");
    setValue("email", "aakash@example.com");
  };
  return (
    <div className=" p-4 border border-white rounded flex flex-col gap-2 bg-black text-white">
      <div className="h-40 w-40">
        <img
        className="object-cover h-full w-full rounded-xl"
          // src="https://i.pinimg.com/736x/e6/cf/53/e6cf53cc70e559aad01c9e0f63ee1a0d.jpg"
          src={user.image}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-1 ">
        <h1>{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.mobile}</p>
      </div>
      <div className="flex justify-between w-full gap-4">
        <button onClick={handleUpdate} className="bg-yellow-700  py-2 px-3 rounded">Update</button>
        <button className="bg-red-700  py-2 px-3 rounded">Delete</button>
      </div>
    </div>
  );
};

export default Usercard;
