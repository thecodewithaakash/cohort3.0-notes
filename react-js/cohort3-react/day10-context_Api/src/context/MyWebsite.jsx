import { createContext, useState } from "react";

export let MyShop = createContext();

export const MyShopContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyShop.Provider
    // value accepts only single value but we can pass multiple values by passing an object,Array etc.. as a value prop.
      value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems }}
    >
      {children}
    </MyShop.Provider>
  );
};
