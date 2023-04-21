import { createSlice } from "@reduxjs/toolkit";

export interface modalState {
  modal: boolean;
}

const initialState: modalState = {
  modal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
  },
});

export const { onModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
