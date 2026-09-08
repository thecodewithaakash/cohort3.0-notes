import React from 'react'
import Form from './components/Form'
import { useRef } from 'react';
import RHF from './components/RHF';

const App = () => {
  console.log('App rendering...')
  // const inpRef = useRef();
  // console.log(inpRef);
  
  return (
    <div className='h-screen p-5 bg-gray-300 w-full'>
      <h1  className='mb-8'>Hey This is Form</h1>
      {/* <Form /> */}

      {/* <input ref={inpRef} type="text" placeholder='something...'/>
      <button onClick={() => console.log(inpRef.current.value)}>submit</button> */}


      {/* ### Understanding React Hook Form(RHF) */}
      <RHF />
    </div>
  )
}

export default App


/* useRef vs input changes:

   - useRef stores a mutable object: { current: value }.
   - Updating ref.current does NOT trigger re-render because it store original references(address) of real dom.
   - React state (useState) is tied to re-renders, but useRef is not.
   - So when an input value changes, React re-renders only if you use state.
   - If you rely on useRef, the ref.current updates silently in memory,
     but the component output doesn’t refresh.
   - That’s why useRef "does not change" visually even though the value inside
     ref.current can be updated.
*/
