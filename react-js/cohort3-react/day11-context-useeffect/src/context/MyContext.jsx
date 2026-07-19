import { createContext, useState } from "react";

// consumer ~ consumed by the components which are using the context data.
export const MyStore = createContext();

// provider ~ provides the data to the components which are consuming the context data.
export const ContextProvider = ({ children }) => {
  console.log("context rendering..");
  const [count, setCount] = useState(0);

  return (
    <MyStore.Provider value={{ count, setCount }}>{children}</MyStore.Provider>
  );
};
