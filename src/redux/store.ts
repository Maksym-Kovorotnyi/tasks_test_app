import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { tasksReducer } from "./tasksSlice";

const tasksPersistConfig = {
  key: "tasks",
  storage,
  whitelist: ["tasksList"],
};
const tasksPersitedReducer = persistReducer(tasksPersistConfig, tasksReducer);

export const store = configureStore({
  reducer: tasksPersitedReducer,
});

export const persistor = persistStore(store);
