import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import cartReducer from "../features/cartSlice";

// Redux store configuration - “The Redux store manages and delivers the global state, while the UI consumes slices to access and update that state.”
export const store = configureStore({
  reducer: {
    // Register reducer here
    counter: counterReducer, // handles counter state
    cart: cartReducer,       // handles cart state
  },
});
