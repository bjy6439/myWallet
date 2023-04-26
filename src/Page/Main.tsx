import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";
import Graph from "../Components/Graph";
import { RootState, useAppDispatch } from "../Store/store";
import { getDetailData } from "../Store/detailDataSlice";
import { useSelector } from "react-redux";

const Main = () => {
  const dispatch = useAppDispatch();
  const myAlldata = useSelector(
    (state: RootState) => state.myAlldata.myAllData
  );

  useEffect(() => {
    dispatch(getDetailData("BTC-CVC"));
  }, []);

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
                      {myAlldata.map((data: any) => {
                        return (
                          <Grid
                            item
                            xs={5}
                            sm={5}
                            md={5}
                            lg={5}
                            sx={{ cursor: "pointer", margin: 1 }}
                            onClick={() => {
                              dispatch(getDetailData(data));
                            }}
                          >
                            {" "}
                            <Box
                              sx={{
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                borderRadius: 5,
                                padding: 1,
                              }}
                            >
                              <div>{data}</div>
                            </Box>
                          </Grid>
                        );
                      })}
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
