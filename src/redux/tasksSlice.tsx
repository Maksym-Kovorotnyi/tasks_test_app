import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/types";

const tasksInitialState = {
  tasksList: [] as Task[],
};

const taksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasksList.unshift(action.payload);
    },
  },
});

export const tasksReducer = taksSlice.reducer;
export const { addTask } = taksSlice.actions;
