import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // cartItems:[],  // --> state.cartItems.push(action.payload)
    cartItems: null,
  },
  reducers: {
    addToCart: (state, action) => {
      // state.cartItems.push(action.payload)
      state.cartItems = action.payload;
    },
    removeFromCart: () => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

