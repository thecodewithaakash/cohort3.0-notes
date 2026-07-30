import React, { useContext, useState } from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import NestedComp from "./components/NestedComp";
import { MyStore } from "./context/MyContext";

const TestComponents = () => {
  // const [data, setData] = useState("hey this is central data...");

  return (
    // ### understanding central state management
    // <div>
    //   <h1>All components</h1>

    //   <Comp1 data={data} />
    //   <Comp2 data={data} />
    //   <Comp3 data={data} />
    //   <Comp4 data={data} />
    // </div>

    // ### understanding nested state management -> props drilling
    // <div>
    //   <h1>All components</h1>

    //   <Comp1 data={data} />
    // </div>


    // ### understanding context api fundamentals
    // <div>
    //   <h1>All components</h1>

    //   {/* <Comp1 data={data} >
    //     comment: children props
    //     <NestedComp />
    //   </Comp1> */}
    // </div>

    // ### using context api with useContext hook
    <div>
      <h1>All components</h1>
      <Comp1  />
    </div>
  );
};

export default TestComponents;
