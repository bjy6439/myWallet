import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface modalState {
  myData: any[];
}

const initialState: modalState = {
  myData: [],
};

const getApi = async () => {
  const options = {
    method: "GET",
    headers: { accept: "application/json" },
  };
  await axios
    .get(
      "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=200",
      options
    )
    .then((res: any) => {
      return res.data;
    });
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state) => {
      const data = getApi();

      console.log(state.myData.push(data));
    },
  },
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;
