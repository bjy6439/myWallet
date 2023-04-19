import { Box, Container, Grid } from "@mui/material";
import styled from "styled-components";
import Navigation from "../Components/Navigation";

const Main = () => {
  return (
    <Background>
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
            <Grid item xs={5} sm={5} md={3}>
              <Navigation />
            </Grid>
            <Grid item xs={7} sm={7} md={9}>
              <div>asdsa</div>
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
