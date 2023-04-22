import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import authReducer from "./authSlice";
import dataSlice from "./dataSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    mydata: dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
