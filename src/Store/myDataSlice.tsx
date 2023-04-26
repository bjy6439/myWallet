import { createSlice } from "@reduxjs/toolkit";

export interface myAllDataState {
  myAllData: any[];
}

const initialState: myAllDataState = {
  myAllData: [],
};

export const myDataSlice = createSlice({
  name: "myAllData",
  initialState,
  reducers: {
    addMyData: (state, action) => {
      const existingIndex = state.myAllData.findIndex(
        (item) => item === action.payload
      );

      if (existingIndex >= 0) {
        state.myAllData.splice(existingIndex, 1);
      } else {
        state.myAllData.push(action.payload);
      }
    },
  },
});

export const { addMyData } = myDataSlice.actions;
export default myDataSlice.reducer;
