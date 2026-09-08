import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  // const data = useForm();
  // console.log(data);

  console.log("RHF rendering...");

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    reset()
  }

  return (
    <div className="w-80 h-screen">
      <h1>React Hook Form</h1>
      <form 
    //   onSubmit={handleSubmit((data) => {
    //     console.log(data);
    //   })} 

    onSubmit={handleSubmit(formSubmit)} 
      className="flex p-6 rounded bg-white flex-col gap-4">
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
          {...register("productName")}
        />
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
          {...register("price")}
        />
        <input
          type="text"
          placeholder="Category..."
          className="p-2 border border-gray-400 rounded"
          {...register("category")}
        />
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
          {...register("image")}
        />
        <button className="p-2 bg-blue-600 text-white rounded uppercase">
          create
        </button>
      </form>
    </div>
  );
};

export default RHF;


/* React Hook Form:
   - react hook form uses useRef to avoid re-rendering...
   - register("fieldName") returns an object with props (name, onChange, onBlur, ref).
   - We use {...register("fieldName")} to spread those props onto the input element.
   - This connects the input to RHF’s state/validation system.
   ✅ register wires inputs into RHF, and the spread operator applies its props correctly. */
