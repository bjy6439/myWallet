import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import authReducer from "./authSlice";
import dataSlice from "./dataSlice";
import { useDispatch } from "react-redux";
import detailDataSlice from "./detailDataSlice";
import myDataSlice from "./myDataSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    mydata: dataSlice,
    detailData: detailDataSlice,
    myAlldata: myDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
