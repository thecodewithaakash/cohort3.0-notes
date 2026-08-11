import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTodo: (state, action) => {
      // console.log(action); // {type: 'todo/addTodo', payload: {…}}

      state.tasks.push(action.payload);
    },
    delTodo: (state, action) => {
      const items = state.tasks.filter((val) => val.id !== action.payload);
      state.tasks = items;
    },
    updateTodo: (state, action) => {
      //  console.log(action.payload);
      const item = state.tasks.find((val) => val.id === action.payload.id);
     const updatedTasks =  state.tasks.map((val) => {
        if (val.id === item.id) {
          val = action.payload;
        }
        return val;
      });
      state.tasks = updatedTasks;
    },
  },
});

// console.log("todoSlice",todoSlice);

// exporting actions
export const { addTodo, delTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
