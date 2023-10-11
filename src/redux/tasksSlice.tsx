import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/types";

const tasksInitialState = {
  tasksList: [] as Task[],
  idToChange: null as string | null,
};

const taksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasksList.unshift(action.payload);
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.tasksList = state.tasksList.filter(
        (obj) => obj.id !== action.payload
      );
    },
    findTask(state, action: PayloadAction<string>) {
      state.idToChange = action.payload;
    },
    changeTask(state, action: PayloadAction<any>) {
      state.tasksList[action.payload.indexToChange] =
        action.payload.changedTask;
    },
    changeTaskStatus(state, action: PayloadAction<boolean>) {},
  },
});

export const tasksReducer = taksSlice.reducer;
export const { addTask, deleteTask, findTask, changeTask } = taksSlice.actions;
