import { createContext, useState } from "react";

// setup out blank store --- consumers will consume this store
// it creates a context object which will be used to share data across components - blank store
export const MyStore = createContext();

// make a provider of our store who handle data and serves to the customers(consumers)
// it consumes the store and provide the data to the children components

// this is a HOF which accepts children(functional components) and returns a provider component which will provide the data to the children.
export const ContextProvider = ({ children }) => {
  const [centralValue, setCentralValue] = useState("me context se hu");
  const [cartItems, setCartItems] = useState([]);

  return (
    // context is a HOF which accepts children and returns a provider component which will provide the data to the children.
    // here myStore context is HOF which accepts a value prop & return a provider component which will provide the data to the children.

    // it consumes the store and store the data in the value prop and provide it to the children components
    
    //  <MyStore.Provider value={centralValue}></MyStore.Provider>
    <MyStore.Provider value={{ centralValue, cartItems, setCartItems }}>
      {children}
    </MyStore.Provider>
  );
};
