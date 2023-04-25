import { Box, Card, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";
import Graph from "../Components/Graph";
import { axisBottom, axisLeft, scaleBand, scaleLinear, select } from "d3";

const Main = () => {
  const [myCoin, setMycoin] = useState([]);
  const getApi = async () => {
    const options = {
      method: "GET",
      headers: { accept: "application/json" },
    };
    await axios
      .get(
        "https://api.upbit.com/v1/candles/minutes/10?market=KRW-BTC&count=60",
        options
      )
      .then((res: any) => {
        setMycoin(res.data);
      });
  };

  useEffect(() => {
    getApi();
  });

  return (
    <Background>
      <Container>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 5,
            borderRadius: 2,
          }}
        >
          <Grid container sx={cardBox}>
            <Grid item xs={12} sm={12} md={5} lg={3}>
              <Navigation />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={9}>
              <Box>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12} sm={10} md={10} lg={10}>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Graph />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="subtitle1">
                          나의 관심 종목
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Card>12</Card>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Card>12</Card>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Card>12</Card>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Card>12</Card>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Background>
  );
};

export default Main;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const cardBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const DATA = [
  { name: "BTC-ETH", id: 1 },
  { name: "BTC-XRP", id: 2 },
  { name: "BTC-ETC", id: 3 },
  { name: "BTC-OMG", id: 4 },
];
