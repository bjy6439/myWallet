import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface modalState {
  myData: any[];
}

const initialState: modalState = {
  myData: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state) => {
      const getApi = async () => {
        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };
        await axios
          .get(
            "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1",
            options
          )
          .then((res: any) => {
            console.log(res.data, "!!");
            // state.myData.push(res.data);
          });
      };
      getApi();
      console.log(state.myData, "??");
    },
  },
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;
