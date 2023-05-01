import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AlertModal from "../Components/AlertModal";
import { closeModal, onModal } from "../Store/modalSlice";
import { useAppDispatch } from "../Store/store";

const SignUp = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

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
                <Grid container padding={2} sx={Formstyle}>
                  <Typography variant="h4" marginY={2}>
                    간단 회원가입
                  </Typography>

                  {SIGNUPINPUTS.map(({ id, type, label }) => {
                    return (
                      <Grid item xs={12} sm={12} md={12} key={id}>
                        <TextField
                          sx={InputStyle}
                          type={type}
                          variant="standard"
                          label={label}
                        ></TextField>
                      </Grid>
                    );
                  })}
                  <Grid item xs={12} sm={12} md={12}>
                    <Button
                      variant="text"
                      onClick={() => {
                        dispatch(onModal());
                        setTimeout(() => {
                          dispatch(closeModal());
                        }, 1500);
                      }}
                    >
                      회원가입
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <AlertModal />
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
};

const InputStyle = {
  width: 250,
  height: 50,
  margin: 3,
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SIGNUPINPUTS = [
  { id: 1, type: "emain", label: "E-mail을 입력해주세요." },
  { id: 2, type: "text", label: "ID를 입력해주세요." },
  { id: 3, type: "password", label: "PW를 입력해주세요." },
  { id: 4, type: "password", label: "PW 확인" },
  { id: 5, type: "tel", label: "휴대폰 번호" },
];
