import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

// export const loginUserAction = createAsyncThunk('name --> action type',callback -> async () => {})

// loginUserAction is a action
export const loginUserAction = createAsyncThunk(
  "auth/login", // action type
  async (credentials, thunkApi) => {
    try {
      console.log("thunk action triggered..");
      let res = await api.post("/auth/login", credentials);
      toast.success("user logged in");
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      toast.error("login failed");
      return thunkApi.rejectWithValue("login failed");
    }
  }
);

export const hydrateUserAction = createAsyncThunk(
  "/auth/hydrate",
  async (_, thunkApi) => {
    let token = localStorage.getItem("accessToken");

    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      toast.error("Unauthorized user");
      return thunkApi.rejectWithValue("Unauthorized user");
    }
  }
);


/* 

# Redux Thunk + API Flow
- **Redux ne API call ki** (via `createAsyncThunk`).  
- **Redux Thunk** → async outer action jo API response ko Redux state tak **pahunchaata hai**.  
- Data Redux state mein aata hai through **`action.payload`**. 

## 🔑 Promise States (handled via extraReducers)
1. **pending** → API call start → set loading state.  
2. **fulfilled** → API success → update state with `action.payload`.  
3. **rejected** → API fail → handle error state.  

👉 **In short:** *`createAsyncThunk` triggers API call, Thunk returns data, and `extraReducers` handle promise states (pending/fulfilled/rejected) to update Redux state cleanly.*
*/