import React, { useContext } from "react";
import Comp4 from "./Comp4";

const Comp3 = ({ data }) => {
  // console.log("comp 3 --->", data);

  return (
    // <div>
    //   <h1>Component 3</h1>
    // </div>

    //   // uderstanding nested component
    <div>
      <h1>Component 3 inside comp 2</h1>
      <Comp4 data={data} />
    </div>
  );
};

export default Comp3;
