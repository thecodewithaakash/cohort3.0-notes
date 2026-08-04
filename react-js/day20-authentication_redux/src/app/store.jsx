import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});
