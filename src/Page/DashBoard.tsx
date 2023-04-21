import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import Navigation from "../Components/Navigation";

const DashBoard = () => {
  const [xrpInfo, setXrpInfo] = useState([]);

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
  console.log(xrpInfo[0]);
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
              <Box
                sx={{
                  width: 800,
                  height: 800,
                  overflow: "scroll",
                }}
              >
                <Grid container spacing={2} justifyContent="center">
                  {xrpInfo.map((item, idx) => {
                    return (
                      <Grid item xs={12} sm={12} md={6}>
                        <Card key={idx} item={item} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
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
