import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ setUsers, setToggle, users, updatedData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  });

  let formSubmit = (data) => {
    console.log(data);

    if (updatedData) {
      setUsers((prev) => {
        return prev.map((val) => {
          return val.id === updatedData.id ? { ...data } : val; // because defaultValues(React hook form) --> defaultValues: updatedData
          // { ...data } → replace that user with the new form data (coming from RHF’s defaultValues).

          //  / With spread -->  { ...data } → creates a new object copy with all properties of data.
          //  -> Useful if you want immutability guaranteed or plan to add new attributes (id, timestamps, etc.).
          //  Without spread -->  data → just reuses the same object reference.
              // - Fine if data is already a fresh object (like from React Hook Form’s defaultValues).
        });

        
      });
    } else {
      // setUsers((prevUsers) => [...prevUsers, data]);
      // console.log(data);

      //  // - localStorage is synchronous part - so localstorage runs before setUsers(async code)
      // //  - localStorage runs synchronously → executes right away.
      // //  - setUsers schedules a React state update → applied on the next render cycle.
      // //  - localStorage is synchronous (runs immediately) while React state updates are async;
      // //  - this can cause skipping the first added user data.

      // localStorage.setItem("users", JSON.stringify(users));
      // reset();
      // setToggle((prevToggle) => !prevToggle);

      // ### Correct code
      console.log(data);

      //  Spreading it ({ ...data }) copies all of its key‑value pairs into a new object. That way, you can safely add extra fields
      //  (like id) without mutating the original data. In short: ...data unpacks the object’s properties,
      // so you can merge them with new ones when pushing into the array.

      let arr = [...users, { ...data, id: nanoid() }]; // synchronous code
      console.log(arr);
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }

    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-xl font-bold">Create user</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col bg-black gap-3 p-4 rounded border-2 border-white "
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S.*$/,
              message: "Blank spaces is not allowed",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter valid email",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", {
            required: "Image is required",
          })}
          className="p-2 rounded outline-0 border border-white"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">
          Add user
        </button>
      </form>
    </div>
  );
};

export default Form;
