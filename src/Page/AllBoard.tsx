import { Box, Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import Navigation from "../Components/Navigation";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store/store";
import { getAllData } from "../Store/dataSlice";

const AllBoard = () => {
  const [dataName, setDataName] = useState("BTC");
  const market = useSelector((state: RootState) => state.mydata.myData);
  const isModal = useSelector((state: RootState) => state.modal.modal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllData());
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
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Navigation />
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid
                  container
                  sx={{
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  {BtnName.map(({ id, name }) => {
                    return (
                      <Grid item key={id} textAlign="center">
                        <Button
                          onClick={() => {
                            setDataName(name);
                          }}
                        >
                          {name}
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box
                  sx={{
                    height: 600,
                    overflow: "scroll",
                    padding: 4,
                    display: "flex",
                    justifyContent: "center",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  <Grid container spacing={2} justifyContent="center">
                    {market
                      .filter(({ market }: { market: string }) => {
                        return market.split("-")[0] === dataName;
                      })
                      .map((item) => {
                        return (
                          <>
                            <Grid item xs={12} sm={12} md={6}>
                              <Card item={item} key={item.market} />
                            </Grid>
                          </>
                        );
                      })}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Background>
  );
};

export default AllBoard;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ece8e7;
`;
const cardBox = {
  display: "flex",
  justifyContent: "center",
};

const BtnName = [
  { id: 1, name: "BTC" },
  { id: 2, name: "KRW" },
  { id: 3, name: "USDT" },
];
