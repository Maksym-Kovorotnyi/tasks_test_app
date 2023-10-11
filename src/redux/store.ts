import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  REGISTER,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";

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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
