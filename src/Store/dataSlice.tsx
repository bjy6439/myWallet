import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface modalState {
  myData: any[];
  status: string;
}

const initialState: modalState = {
  myData: [],
  status: "",
};

export const getAllData = createAsyncThunk(
  "dataSlice,getAllData", // 타입
  async (title: string = "all") => {
    const resp = await axios.get(
      `https://api.upbit.com/v1/market/${title}?isDetails=false`,
      {
        headers: { accept: "application/json" },
      }
    );
    const data = resp.data;
    return data;
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action: AnyAction) => {
      state.myData = action.payload;
      state.status = "Success";
    });
  },
});

// export const {} = dataSlice.actions;
export default dataSlice.reducer;
