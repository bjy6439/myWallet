import { Box, Button, Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import Navigation from "../Components/Navigation";

const DashBoard = () => {
  const [xrpInfo, setXrpInfo] = useState([]);
  const [dataName, setDataName] = useState("BTC");

  useEffect(() => {
    const getApi = async () => {
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };
      await axios
        .get("https://api.upbit.com/v1/market/all?isDetails=false", options)
        .then((res: any) => {
          setXrpInfo(res.data);
        });
    };
    getApi();
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
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid
                  container
                  sx={{
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {BtnName.map(({ id, name }) => {
                    return (
                      <Grid
                        item
                        key={id}
                        xs={4}
                        sm={4}
                        md={4}
                        lg={4}
                        textAlign="center"
                      >
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
                    {xrpInfo
                      .filter(({ market }: { market: string }) => {
                        return market.split("-")[0] === dataName;
                      })
                      .map((item, idx) => {
                        return (
                          <Grid key={idx} item xs={12} sm={12} md={6}>
                            <Card item={item} />
                          </Grid>
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

export default DashBoard;

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

const BtnName = [
  { id: 1, name: "BTC" },
  { id: 2, name: "KRW" },
  { id: 3, name: "USDT" },
];
