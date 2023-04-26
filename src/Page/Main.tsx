import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";
import Graph from "../Components/Graph";
import { RootState, useAppDispatch } from "../Store/store";
import { getDetailData } from "../Store/detailDataSlice";
import { useSelector } from "react-redux";
import { addMyData } from "../Store/myDataSlice";

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
                    <Grid container justifyContent="center">
                      <Grid item xs={12} sm={12} md={12} lg={8} m={2}>
                        <Graph />
                      </Grid>
                      <Grid item xs={12} sm={10} md={12} lg={12}>
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
                            onClick={(e) => {
                              dispatch(getDetailData(data));
                              e.stopPropagation();
                            }}
                          >
                            <Box
                              sx={{
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                borderRadius: 5,
                                padding: 1,
                              }}
                            >
                              <Grid container alignItems="center">
                                <Grid item xs={9} sm={9} md={9} lg={9}>
                                  <Typography p={2}>{data}</Typography>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2}>
                                  <Button
                                    onClick={() => {
                                      dispatch(addMyData(data));
                                    }}
                                  >
                                    del
                                  </Button>
                                </Grid>
                              </Grid>
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
