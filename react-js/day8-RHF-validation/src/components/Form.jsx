import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange",defaultValues:{
    name:"Aakash",
    email:"codewithaakash@gmail.com"
  } });

  // register is a combination of onChange, onBlur, ref, name, and value,required. It is used to register an input or select element and apply validation rules to it.

  const formSubmit = (data) => {
    console.log(data);
    // setUsers([...users,data]); // ...users because array is reference type and we need to create a new array with the existing users and the new user data.
    setUsers((prevUsers) => [...prevUsers, data]); // prevUsers is the previous state of users. It is used to create a new array with the existing users and the new user data.
    reset();
    setToggle((prevToggle) => !prevToggle);
  };

  // errors is an object that contains the validation errors for each field. It is used to display error messages to the user.
  console.log(errors);

  return (
    <div className="flex flex-col gap-3  items-center">
      <h1 className="text-xl font-bold text-white">Create User</h1>
      {/* <form onSubmit={handleSubmit((data) => console.log(data))} className="w-90 flex flex-col gap-3 p-3 rounded border border-white bg-black"> */}
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col gap-3 p-3 rounded border border-white bg-black"
      >
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          className="p-2 rounded outline-0 border border-white text-white"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[a-zA-Z]{3,}$/,
              message:
                "Name must contain only letters and be at least 3 characters long",
            },
          })}
        />

        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          className="p-2 rounded outline-0 border border-white text-white"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            // pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />

        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <input
          className="p-2 rounded outline-0 border border-white text-white"
          type="password"
          placeholder="password!"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character and be at least 8 characters long",
            },
          })}
        />

        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}

        <input
          className="p-2 rounded outline-0 border border-white text-white"
          type="number"
          placeholder="Mobile"
          {...register("mobile", {
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "Mobile must be at least 10 characters",
            },
            maxLength: { value: 10, message: "Maximum 10 digits are required" },
          })}
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <input
          className="p-2 rounded outline-0 border border-white text-white"
          type="url"
          placeholder="Image"
          {...register("image", {
            required: "Image URL is required",
            pattern: {
              value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i,
              message: "Invalid image URL",
            },
          })}
        />
        <button className="text-white bg-blue-700 p-4 rounded-xl cursor-pointer">
          Add user
        </button>
      </form>
    </div>
  );
};

export default Form;
