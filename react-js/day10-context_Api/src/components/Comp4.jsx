import React, { useContext, useState } from "react";
import { MyStore } from "../context/MyContext";

const Comp4 = ({ data }) => {
  // console.log("comp 4 --->", data);

  // ### using context api with useContext hook
  let {centralValue} = useContext(MyStore);
  console.log(centralValue);

  return (
    // <div>
    //   <h1>Component 4</h1>
    // </div>

    <div>
      <h1>Component4 inside comp 3</h1>
    </div>
  );
};

export default Comp4;


