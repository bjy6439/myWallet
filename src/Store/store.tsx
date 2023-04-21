import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import authReducer from "./authSlice";
import dataSlice from "./dataSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    mydata: dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
