import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo, updateTodo } from "../store/todoSlice";

export default function TodoApp() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.todo);
  console.log(tasks);

  const [inpValue, setInpValue] = useState("");
  const [editingTodo, setEditingTodo] = useState({});

  const handleAdd = () => {
    const newTask = {
      id: nanoid(),
      title: inpValue,
    };
    dispatch(addTodo(newTask));
  };

  const handleUpdate = () => {
    if (!editingTodo.id) return;
    dispatch(updateTodo(editingTodo));
    setEditingTodo({});
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>

        {/* Add Todo */}
        <div className="flex gap-2 mb-6">
          <input
            value={inpValue}
            onChange={(e) => setInpValue(e.target.value)}
            type="text"
            placeholder="Enter a new task..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map(({ id, title }) => {
            return (
              <div
                key={id}
                className="flex items-center justify-between border rounded-lg p-3"
              >
                <span className="text-gray-800">{title}</span>

                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingTodo({ id, title })}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => dispatch(delTodo(item.id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Update Section (Hidden by default - you can control it later) */}
        <div className="mt-8 border-t pt-6">
          <h2 className="font-semibold mb-3">Update Todo</h2>

          <div className="flex gap-2">
            <input
              value={editingTodo.title ?? ""}
              onChange={(e) =>
                setEditingTodo(
                  (prev) => (prev = { id: prev.id, title: e.target.value }),
                )
              }
              type="text"
              placeholder="Update task..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button onClick={handleUpdate} className="bg-green-600 hover:bg-green-700 text-white px-5 rounded-lg">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
