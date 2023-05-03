import { configureStore } from "@reduxjs/toolkit";
import RecordSlice from "./components/Record/RecordSlice";

const store = configureStore({
  reducer: {
    record: RecordSlice
  }
});

export default store;
