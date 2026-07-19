import React, { use, useRef, useState } from "react";

const Form = () => {
  // console.log("form re-rendering");
  // const [formData, setFormData] = useState({});
  // console.log(formData);

  // -  in react, always try reduce re-rendering to improve performance
  // - due to above code -> so many re-rendering happens on every event change of input so this is not optimize so we will use useRef hook.

  //    useRef hook uses to fetch real dom elements -
  // const ref = useRef(null);
  // console.log(ref);

  // ### let's first we understand without useRef -> through useState
  // console.log("re-rendering happens due to formData changes");
  // const [formData, setFormData] = useState({});
  // console.log(formData);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  // #### Now we will reduce re-rendering problem through useRef
  /* One useRef holds a single mutable value or DOM node;
   to store multiple refs, use an object/array inside one ref. 
👉 So technically: `useRef` itself points to **one value**, but you can pack multiple references inside it (like `ref.current = {btn:..., input:...}`) if needed. 
  */

  // const inpRef = useRef(10); // {current:10}
  // const inpRef = useRef();
  // console.log(inpRef); // {current: undefined}
  // const inpRef = useRef({}) // for multiple elements

  // ### handling form events 
  // const nameRef = useRef(null);
  // const priceRef = useRef(null);
  // const categoryRef = useRef(null);
  // const imageRef = useRef(null);

  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(nameRef.current.value);
  //   console.log(priceRef.current.value);
  //   console.log(categoryRef.current.value);
  //   console.log(imageRef.current.value);
  // };


  //###  handling multiple form events with single useRef 
  const formRef = useRef({})
  const [products,setProducts] = useState();
  console.log("this is products",products);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef);
    // console.log(formRef.current.productName.value);
    // console.log(formRef.current.price.value);
    // console.log(formRef.current.category.value);
    // console.log(formRef.current.image.value);

    let formData = {
      pName: formRef.current.productName.value,
      price: formRef.current.price.value,
      category:formRef.current.category.value,
      image:formRef.current.image.value
    }
    setProducts(formData)
  };

  return (
    // This is virtual dom elements not real dom elements(HTML) 
    <div className="w-80 h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex p-6 rounded bg-white flex-col gap-4"
      >
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
          // onChange={(e) => setFormData({...formData,productName:e.target.value})}
          // onChange={(e) => console.log(e)} // we got syntheticBaseEvent
          // ref={(e) => console.dir(e)}
          // ref={inpRef} // it store the reference(address) of real dom elements
          // ref={nameRef} // for each single useRef
          ref={(e) => formRef.current.productName = e}
        />
        <input
          //  onChange={(e) => setFormData({...formData,price:e.target.value})}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
          // ref={priceRef} // for each single useRef elements
          ref={(e) => formRef.current.price = e}
        />
        <span>Select Category:</span>
        <select
          name=""
          className="p-2 border border-gray-400 rounded"
          // onChange={(e) =>
          //   setFormData({ ...formData, category: e.target.value })
          // }
          // ref={categoryRef}
          ref={(e) => formRef.current.category = e}
        >
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
          // onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          // ref={imageRef}
          ref={(e) => formRef.current.image = e}
        />
        <button className="p-2 bg-blue-600 text-white rounded uppercase">
          create
        </button>
      </form>

      <div className="container">
        <h1>{products.pName}</h1>
         <h1>{products.price}</h1>
          <h1>{products.category}</h1>
           <h1>{products.image}</h1>
      </div>
    </div>
  );
};

export default Form;

/* 
- React events are SyntheticBaseEvent objects.They are wrappers around native browser events,created by React’s synthetic event system.
   This is not about Babel or the Virtual DOM, but React’s abstraction to ensure cross‑browser consistency. 
- 👉 In short: SyntheticBaseEvent = React’s unified event wrapper, not because of Babel or Virtual DOM.
*/

/*
-  useRef in React does not fetch elements from the Virtual DOM. Instead, it provides a way to directly reference real DOM nodes (or persist mutable values) without triggering re-renders.
👉 In short: **`useRef` = direct handle to real DOM or persistent mutable value, not Virtual DOM access.**
*/

/* In React:
   - Real DOM generates native browser events.
   - React intercepts them and maps to the Virtual DOM.
   - These events are then wrapped into Synthetic Events,
     providing a consistent, cross-browser abstraction. 
     
- 👉 In short: Real dom(native events) → React Virtual DOM → SyntheticBaseEvent wrapper for uniform handling.
- react wraps all events inside syntheticBaseEvent     
     */

/* React is case‑sensitive:
   Components → PascalCase (MyComponent)
   Props & events → camelCase (onClick, onChange)
   Lowercase tags → HTML elements 
   */

/* React wraps real DOM events into SyntheticEvents,
   delivering a consistent, delegated event system. */

/*
###  useRef in React:
    - Lets you hold a persistent reference(Address) to a DOM node or value
      without triggering re-renders.
    - Useful for event handling because you can directly access
      the real DOM element that fired the native event.
    - While React wraps native events into SyntheticEvents,
      useRef gives you the bridge back to the actual DOM node
      if you need low-level control (e.g., focus, scroll, measure).
    - This way, you combine React’s consistent SyntheticEvent system
      with direct DOM access when performance or precision matters.
*/


/* React compilation flow:

   1. Your plain JavaScript code executes as usual.
      - Variables, functions, loops, etc. run in the JS engine.

   2. JSX is not valid JavaScript by itself.
      - Tools like Babel or esbuild transform JSX into React.createElement calls.
      - Example: <Button /> → React.createElement(Button, ...)

   3. After bundling:
      - The transformed JS (with React.createElement) is executed by the browser.
      - This produces Virtual DOM objects, which React reconciles with the Real DOM.

   ✅ Corrected concept:
   - JavaScript executes normally.
   - JSX is compiled first by the bundler (esbuild/Babel) into JS.
   - Then the browser runs that compiled JS to build Virtual DOM → Real DOM.
*/


/* In a ref callback like: ref={(e) => formRef.current.productName = e}

   - React passes the actual DOM element (node) as 'e' to the ref callback.
   - If you wrote e.target.value, it would be wrong because 'e' here is not an event object,
     it's the DOM node itself.
   - So 'e' is already the element reference (e.g., <input> node).
   - You can later access its value with formRef.current.productName.value.
   - ✅ Correct: use 'e' directly to store the node, not 'e.target.value'.
*/
