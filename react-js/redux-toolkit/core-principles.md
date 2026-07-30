
### Redux is built on a few core principles, and Redux Toolkit extends them with modern best practices.

## 🔑 Core Principles of Redux
- **Single Source of Truth** → One centralized store holds the entire application state.  
- **State is Read‑Only** → The only way to change state is by dispatching actions (plain objects).  
- **Changes via Pure Reducers** → Reducers are pure functions that take `(state, action)` and return a new state.  
- **Predictable One‑Way Data Flow** → Actions → Reducers → New State → UI re‑renders.  
- **Immutability** → State updates must be immutable (no direct mutation).  
- **No Side Effects in Reducers** → Reducers must stay pure; async logic handled by middleware.  
- **Debuggable with DevTools** → Every action/state change can be tracked and replayed.  [Redux](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)  [Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)  

---

## 🔑 Principles / Best Practices in Redux Toolkit (RTK)
- **Slices** → Bundle state, reducers, and auto‑generated actions in one place.  
- **Immer Integration** → Write “mutable” code in reducers, but RTK ensures immutability under the hood.  
- **createSlice & createAsyncThunk** → Simplify reducer/action creation and async logic.  
- **configureStore** → Standardized store setup with built‑in middleware and DevTools support.  
- **Opinionated Defaults** → RTK enforces recommended patterns to reduce boilerplate and mistakes.  
- **Normalized State** → Encourages storing data by IDs for efficient lookups.  
- **Memoized Selectors** → Use Reselect for optimized derived data.  
- **TypeScript Support** → Strong typing for actions, state, and reducers.  [Redux](https://redux.js.org/introduction/why-rtk-is-redux-today)  


- *“Redux is based on a single store, immutable state updates, and pure reducers. Redux Toolkit builds on these principles with slices, Immer for immutability, and opinionated APIs like `createSlice` and `configureStore` to reduce boilerplate and enforce best practices.”*  


- **Redux and Redux Toolkit rely on core JavaScript concepts like functions, objects, immutability, ES6+ syntax, and async handling. Redux Toolkit adds modern JS features like destructuring, modules, and Immer for immutable updates.**  

---

## 🔑 JavaScript Concepts in Redux
- **Functions** → Reducers are pure functions `(state, action) => newState`.  
- **Objects** → Actions are plain JS objects `{ type, payload }`.  
- **Immutability** → State updates must return new objects, not mutate existing ones.  
- **Closures** → Middleware and thunks rely on closures to access `dispatch` and `getState`.  
- **Modules (import/export)** → Store, reducers, and actions are split into files and imported.  
- **ES6+ Syntax**  
  - Arrow functions for reducers and action creators.  
  - Destructuring for state and payload.  
  - Spread operator (`...`) for immutable updates.  
- **One‑way data flow** → Actions → Reducers → New State → UI.  
- **Higher‑order functions** → Middleware wraps dispatch to add extra behavior.  
- **Promises / Async** → Thunks and async logic use Promises for API calls.  
- **Switch statements / conditionals** → Classic reducers use `switch(action.type)` to decide updates.  

---

## 🔑 JavaScript Concepts in Redux Toolkit
- **createSlice** → Uses object literals to define reducers + auto‑generate actions.  
- **Immer** → Lets you write “mutable” code (`state.count++`) but produces immutable state.  
- **configureStore** → Simplifies store setup with middleware and DevTools by default.  
- **createAsyncThunk** → Wraps async/await logic for API calls.  
- **Destructuring + auto‑generated actions** → `export const { increment, decrement } = slice.actions`.  
- **Default parameters** → Initial state defined directly in slice.  
- **Template literals** → Often used for action types or logging.  
- **TypeScript support** → Strong typing for state, actions, and reducers.  
- **Selectors** → Functions that read/derive state, often memoized with Reselect.  

---

- *“Redux is built on plain JavaScript concepts like functions, objects, immutability, and one‑way data flow. Redux Toolkit modernizes this with ES6+ features, Immer for immutability, and utilities like `createSlice` and `createAsyncThunk` to reduce boilerplate.”*  

---

- **Redux = core JS fundamentals (functions, objects, immutability).**  
- **Redux Toolkit = modern JS features + utilities (slices, Immer, async/await).**  

