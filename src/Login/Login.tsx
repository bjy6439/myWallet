import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Navigation from "../Components/Navigation";

const Login = () => {
  return (
    <>
      <Container fixed>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 5,
            borderRadius: 2,
            minWidth: 300,
          }}
        >
          <Grid container>
            <Grid item>
              <Navigation />
            </Grid>
            <Grid item>
              <div>asdsa</div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Login;
