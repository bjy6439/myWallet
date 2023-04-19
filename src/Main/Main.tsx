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
            <Grid item>
              <Navigation />
            </Grid>
            <Grid item>
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
