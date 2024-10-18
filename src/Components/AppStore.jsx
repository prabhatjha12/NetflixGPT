import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Corrected import

const AppStore = configureStore({
  reducer: { user: userReducer }, // Corrected key and reducer name
});

export default AppStore;
