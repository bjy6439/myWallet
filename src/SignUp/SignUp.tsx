import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import Navigation from "../Components/Navigation";

const SignUp = () => {
  return (
    <Background>
      <Container fixed>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 5,
            borderRadius: 2,
            height: 800,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} sm={10} md={6}>
              <Box
                sx={{
                  padding: 4,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid>
                  <Typography variant="h4" mb={3}>
                    간단 회원가입
                  </Typography>
                </Grid>
                <Grid
                  container
                  xs={12}
                  sm={12}
                  md={12}
                  lg={10}
                  padding={2}
                  sx={Formstyle}
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      sx={InputStyle}
                      type="email"
                      variant="standard"
                      label="E-mail을 입력해주세요."
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      sx={InputStyle}
                      variant="standard"
                      label="ID를 입력해주세요."
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      sx={InputStyle}
                      type="password"
                      variant="standard"
                      label="PW를 입력해주세요."
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      sx={InputStyle}
                      type="password"
                      variant="standard"
                      label="PW 확인"
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Button variant="text">회원가입</Button>
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

export default SignUp;

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
  margin: 3,
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
