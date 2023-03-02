import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./slices/toDoSlice";

const store = configureStore({
  reducer: toDoSlice,
});

export default store;