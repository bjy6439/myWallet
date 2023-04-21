import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Store/dataSlice";
import { RootState } from "../Store/store";

const style = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};

const Card = () => {
  const myData = useSelector((state: RootState) => state.mydata.myData);
  const dispatch = useDispatch();

  console.log(myData);
  ///
  const [xrpInfo, setXrpInfo] = useState([]);

  useEffect(() => {
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
          setXrpInfo(res.data);
        });
    };
    getApi();
  }, []);

  return (
    <Container>
      <Box sx={style}>
        <Grid
          container
          p={2}
          onClick={() => {
            dispatch(getData());
          }}
        >
          <Grid item xs={2} sm={2} md={2} textAlign="center">
            1
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            2
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            3
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            4
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            5
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            6
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Card;
