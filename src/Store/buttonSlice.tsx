import { createSlice } from "@reduxjs/toolkit";

const buttonName = () => {
  const url = window.location.pathname;
  if (url.endsWith("/all")) {
    return "All board";
  } else if (url.endsWith("/")) {
    return "Dashboard";
  } else {
    return "";
  }
};

export interface modalState {
  button: string;
}

const initialState: modalState = {
  button: buttonName(),
};

export const modalSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setButton: (state, action) => {
      state.button = action.payload;
    },
  },
});

export const { setButton } = modalSlice.actions;

export default modalSlice.reducer;
