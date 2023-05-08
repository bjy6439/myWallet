import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AlertModal from "../Components/AlertModal";
import { REDIRECT_URI, REST_API_KEY } from "../Components/SecreatKey";

const Login = () => {
  const nav = useNavigate();
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
                <LogoImg
                  onClick={() => {
                    nav("/");
                  }}
                  src={"/images/logo.png"}
                />
              </Grid>
              <Grid item sx={Formstyle} xs={12} sm={12} md={10}>
                <Grid item sx={dpColumn}>
                  <Grid item xs={10}>
                    <Typography p={3} fontSize={30}>
                      Wallet Login
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Grid item xs={12} sm={12} md={10}>
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

                  <Grid item xs={12} md={12} sm={12}>
                    <Button
                      onClick={() => {
                        kakaoLogin();
                      }}
                    >
                      <KakaoImg src="https://www.gb.go.kr/Main/Images/ko/member/certi_kakao_login.png"></KakaoImg>
                    </Button>
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
  width: 400,
  borderRadius: 4,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const InputStyle = {
  width: 300,
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

const LogoImg = styled.img`
  margin: 10px;
  width: 100px;
  cursor: pointer;
`;

const KakaoImg = styled.img`
  width: 200px;
  margin: 10px;
`;
