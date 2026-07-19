import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ data, children }) => {
  // console.log("comp 1 --->", data);

  return (
    // <div>
    //   <h1>Component 1</h1>
    // </div>

    // uderstanding nested component
    <div>
      <h1>Component1</h1>
      <Comp2 data={data} />

      {/* comment: children props */}

      {/* {children} */}
    </div>
  );
};

export default Comp1;
