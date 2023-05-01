import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AlertModal from "../Components/AlertModal";
import { closeModal, onModal } from "../Store/modalSlice";
import { login } from "../Store/authSlice";

const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={12} md={8} lg={8} sx={display}>
              <Grid>
                <Button
                  onClick={() => {
                    nav("/");
                  }}
                >
                  <Typography variant="h4" p={3}>
                    My Wallet
                  </Typography>
                </Button>
              </Grid>
              <Grid item sx={Formstyle} xs={12} sm={12} md={10}>
                <Grid item sx={dpColumn}>
                  <Grid item xs={10}>
                    <Typography p={3} fontSize={30}>
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
                      <Button variant="text">Login</Button>
                      <Button
                        variant="text"
                        onClick={() => {
                          nav("/signup");
                        }}
                      >
                        SignUp
                      </Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item p={3}>
                    <Button
                      onClick={() => {
                        kakaoLogin();
                      }}
                    >
                      카카오로 로그인하기
                    </Button>
                    <Button
                      onClick={() => {
                        dispatch(onModal());
                        setTimeout(() => {
                          dispatch(closeModal());
                        }, 1500);
                      }}
                    >
                      네이버로 로그인하기
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <AlertModal />
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
};

const InputStyle = {
  width: 250,
  height: 50,
  margin: 1,
};

const BtnGroup = {
  padding: 3,
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const display = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const dpColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
