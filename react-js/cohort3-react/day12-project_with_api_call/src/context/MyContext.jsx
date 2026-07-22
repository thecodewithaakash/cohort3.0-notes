import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
      });
    });
  };

  // ### No need for extra checks - so no need to below decrementQuantity function - above decrementQuantity is fine
  // Because: if quantity = 0 → show "Add to Cart"
  // Otherwise → show +/- buttons with current quantity

  //   const decrementQuantity = (id) => {
  //   setCartItems((prev) => {
  //     return prev.map((val) => {
  //       if (val.id === id) {
  //         if (val.quantity > 0) {
  //           // ✅ decrease quantity if > 0
  //           return { ...val, quantity: val.quantity - 1 };
  //         } else {
  //           // ⚠️ quantity already 0
  //           alert("This product's quantity is zero");
  //         }
  //       }
  //       // return unchanged item
  //       return val;
  //     });
  //   });
  // };

  const removeItems = (id) => {
    setCartItems((prev) => prev.filter((val) => val.id !== id));
  };

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        incrementQuantity,
        decrementQuantity,
        removeItems,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
