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

const Login = () => {
  return (
    <Background>
      <Container fixed>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 5,
            borderRadius: 2,
            height: 700,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid item xs={5} sm={5} md={3}>
              <Grid item justifyContent="center" alignItems="center">
                <Navigation />
              </Grid>
            </Grid>
            <Grid
              item
              xs={7}
              sm={7}
              md={9}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid sx={LoginFormBox}>
                <Grid container>
                  <Box sx={Formstyle}>
                    <Grid item>
                      <Typography mb={2} fontSize={30}>
                        Wallet Login
                      </Typography>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <TextField
                          sx={InputStyle}
                          placeholder="ID를 입력해주세요."
                        ></TextField>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <TextField
                          sx={InputStyle}
                          type="password"
                          placeholder="PW를 입력해주세요."
                        ></TextField>
                      </Grid>
                    </Grid>

                    <ButtonGroup sx={BtnGroup}>
                      <Button>Login</Button>
                      <Button>SignUp</Button>
                    </ButtonGroup>
                    <Button>카카오로 로그인하기</Button>
                    <Button>네이버로 로그인하기</Button>
                  </Box>
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
  padding: 4,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const LoginFormBox = {
  display: "flex",
  justifyContent: "center",
  height: 400,
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
