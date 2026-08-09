# 3. Redux + Counter Review

This project combines authentication state with a simple Redux counter.

## Store setup

File: `src/app/store.jsx`

```js
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});
```

The Redux state shape is:

```js
{
  counter: { count: 0 },
  auth: { user: null, isAuthenticated: false }
}
```

## Auth slice

File: `src/features/authSlice.jsx`

This slice stores the current user and a boolean flag.

```js
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
```

This is the auth state used by route protection and login persistence.

## Counter slice

File: `src/features/counterSlice.jsx`

This is a simple example of Redux Toolkit slice logic.

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count++; },
    decrement: (state) => { state.count--; },
    incrementByValue: (state, action) => { state.count += Number(action.payload); },
  },
});
```

## Counter usage in `HomePage`

File: `src/pages/HomePage.jsx`

The home page reads and updates the counter state:

- `useSelector(state => state.counter)` to read `count`
- `useDispatch()` to send `increment`, `decrement`, `incrementByValue`

```js
const { count } = useSelector((state) => state.counter);
const [countPayload, setCountPayload] = useState(0);

<button onClick={() => dispatch(decrement())}>decrement</button>
<button onClick={() => dispatch(increment())}>increment</button>
<input value={countPayload} onChange={(e) => setCountPayload(e.target.value)} />
<button onClick={() => dispatch(incrementByValue(countPayload))}>Add to count</button>
```

## Main entry

File: `src/main.jsx`

The React app is wrapped with the Redux provider and toast container:

```js
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
    <ToastContainer />
  </Provider>
);
```

## Revision takeaway

- Redux stores both auth and counter state in one central store.
- The auth slice is small but crucial for route guarding.
- `HomePage` is a practical example of reading state and dispatching actions.
- The counter logic is useful to review how Toolkit handles immutable updates with mutable syntax.
