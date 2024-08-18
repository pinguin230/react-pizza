import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redusers";

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch;
export default store;