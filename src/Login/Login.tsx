import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import Navigation from "../Components/Navigation";

const display = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const dpColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Login = () => {
  return (
    <Background>
      <Container fixed>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 5,
            borderRadius: 2,
            height: 800,
          }}
        >
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Navigation />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} sx={display}>
              <Grid item sx={Formstyle} xs={12} sm={12} md={7}>
                <Grid item sx={dpColumn}>
                  <Grid item xs={10}>
                    <Typography mb={2} fontSize={30}>
                      Wallet Login
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Grid>
                      <TextField
                        sx={InputStyle}
                        label="ID를 입력해주세요."
                      ></TextField>
                    </Grid>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      sx={InputStyle}
                      type="password"
                      label="PW를 입력해주세요."
                    ></TextField>
                  </Grid>
                  <Grid item xs={10}>
                    <ButtonGroup sx={BtnGroup}>
                      <Button>Login</Button>
                      <Button>SignUp</Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid>
                    <Button>카카오로 로그인하기</Button>
                    <Button>네이버로 로그인하기</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Background>
  );
};

export default Login;

const Formstyle = {
  borderRadius: 4,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // alignItems: "center",
};

const InputStyle = {
  width: 250,
  height: 50,
  margin: 1,
};

const BtnGroup = {
  margin: 2,
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
