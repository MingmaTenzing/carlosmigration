import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

{
  /** export const store = configureStore( {
    reducer: {
        userReducer
    }
}) */
}

const persisitConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persisitConfig, userReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
