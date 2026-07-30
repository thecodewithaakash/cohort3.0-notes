import { createSlice } from "@reduxjs/toolkit";
// Redux Toolkit: createSlice example
// Interview key: A slice = state + reducer functions + auto-generated actions

const counterSlice = createSlice({
  name: "count", // chef in restaurant and slice name → used as key in store
  initialState: {
    count: 0, // initial state for this slice
  },

  // reducers = actions ?  reducers are not the same as actions.
      // -->  Actions describe what happened, while reducers decide how the state should change based on that action.
  reducers: {
    // - reducer functions = state + action
    // - Reducer functions → define how state changes
    // - Action object auto-generated → { type: "count/increment" }
    // - Immer lets us write "mutable" code (state.count++) but keeps state immutable internally
    // - state pointing to the --> "InitialState"

    increment: (state, action) => {
      console.log("this is action", action); // shows type + payload
      // "this is action --> {type: 'count/increment', payload: 'cheelllll'}"
      // "this is action --> {type: 'count/increment', payload: undefined}"

      state.count++; // increment: increases count by 1
    },

    // Action object → { type: "count/decrement" }
    decrement: (state) => {
      state.count--; // decrement: decreases count by 1
    },

    // ❌ Don’t put side-effects (API calls, async logic) inside reducers
    // Reducers must stay pure → only update state
    // Use middleware like createAsyncThunk for async work
  },
});

console.log("Slice",counterSlice);


// Export auto-generated actions → used in components with dispatch()
export const { increment, decrement } = counterSlice.actions;

// Export reducer → register in store
export default counterSlice.reducer;
