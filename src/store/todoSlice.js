import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const loadTasks = createAsyncThunk("todo/loadTasks", async () => {const tasks = JSON.parse(localStorage.getItem("tasks")); return tasks});

const todoSlice = createSlice({
  name: "todo",
  initialState: { tasks: [] },
  reducers: {
    addNewTask: (state, action) => {
      const {
        payload: { text },
      } = action;

      const newTask = {
        id: uuidv4(),
        content: text,
        isDone: false,
      };

      state.tasks.push(newTask);
    },

    toggleTaskIsDone: (state, action) => {
      const {
        payload: { id },
      } = action;

      const task = state.tasks.find((task) => task.id === id);

      if (task) {
        task.isDone = !task.isDone;
      }
    },
    deleteTask: (state, action) => {
      const {
        payload: { id },
      } = action;
      state.tasks = state.tasks.filter((task) => id !== task.id);
    },
  },
  ExtraReducers: (builder) => {
builder.addCase()
builder.addCase()
builder.addCase()

}

});
export const { addNewTask, toggleTaskIsDone, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
