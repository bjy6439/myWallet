import { Box, Card, Container, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";

const Main = () => {
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
                    1
                    <Card />
                  </Grid>
                  <Grid item xs={12} sm={5} md={5} lg={5}>
                    <Card />
                  </Grid>
                  <Grid item xs={12} sm={5} md={5} lg={5}>
                    <Card />
                  </Grid>
                  <Grid item xs={12} sm={5} md={5} lg={5}>
                    <Card />
                  </Grid>
                  <Grid item xs={12} sm={5} md={5} lg={5}>
                    <Card />
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
