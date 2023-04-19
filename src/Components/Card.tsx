import { Box, Container, Grid } from "@mui/material";
import React from "react";

const style = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};

const Card = () => {
  return (
    <Container>
      <Box sx={style}>
        <Grid container p={2}>
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
