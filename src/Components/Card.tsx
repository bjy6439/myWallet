import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const style = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};

interface data {
  market: string;
  korean_name: string;
  english_name: string;
}

const Card = ({ item }: { item: data }) => {
  return (
    <Container>
      <Box sx={style}>
        <Grid container p={2}>
          <Grid item xs={12} sm={12} md={12} textAlign="center">
            마켓 : {item.market}
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            한국명 : {item.korean_name}
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            영문명 : {item.english_name}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Card;
