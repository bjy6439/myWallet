import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface modalState {
  dataInfo: [];
}

const initialState: modalState = {
  dataInfo: [],
};

export const getDetailData = createAsyncThunk(
  "detailDataSlice,getDetailData", // 타입
  async (title: string = "KRW-BTC") => {
    const resp = await axios.get(
      `https://api.upbit.com/v1/candles/days?market=${title}&count=6&convertingPriceUnit=KRW`,
      {
        headers: { accept: "application/json" },
      }
    );
    const data = resp.data;
    return data;
  }
);

export const detailDataSlice = createSlice({
  name: "detailData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailData.fulfilled, (state, action: AnyAction) => {
      state.dataInfo = action.payload.reverse();
    });
  },
});

// export const {} = dataSlice.actions;
export default detailDataSlice.reducer;
