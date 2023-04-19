import { Box, Container, Grid } from "@mui/material";
import Navigation from "../Components/Navigation";

const Main = () => {
  return (
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
  );
};

export default Main;
