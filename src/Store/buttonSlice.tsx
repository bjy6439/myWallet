import { createSlice } from "@reduxjs/toolkit";

export interface modalState {
  button: string;
}

const initialState: modalState = {
  button: "Dashboard",
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
