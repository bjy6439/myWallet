import { Box, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AlertModal from "./AlertModal";
import { useSelector } from "react-redux";
import { closeModal, onModal } from "../Store/modalSlice";
import { logout } from "../Store/authSlice";
import { RootState, useAppDispatch } from "../Store/store";
import styled from "styled-components";
import { setButton } from "../Store/buttonSlice";
import { useEffect } from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const setBtn = useSelector((state: RootState) => state.button.button);

  const clickBtn = (name: string) => {
    if (name === "Dashboard") {
      navigate("/");
      dispatch(setButton(name));
    } else if (name === "All board") {
      navigate("/all");
      dispatch(setButton(name));
    } else {
      dispatch(onModal());
      setTimeout(() => {
        dispatch(closeModal());
      }, 1500);
    }
  };

  return (
    <Container>
      <Box>
        <Grid container>
          <Grid item xs={12} textAlign="center">
            <Logo
              onClick={() => {
                navigate("/");
                clickBtn("Dashboard");
              }}
            >
              <LogoImg src="/images/logo.png" alt="logo" />
            </Logo>
          </Grid>
          <Grid item xs={12}>
            <Grid container mb={3} textAlign="center">
              {BUTTONLIST.map(({ id, name }: { id: number; name: string }) => {
                return (
                  <Grid item key={id} xs={3} sm={3} md={12} textAlign="center">
                    <NavBtn
                      primery={setBtn === name}
                      onClick={() => {
                        clickBtn(name);
                      }}
                    >
                      {name}
                    </NavBtn>
                  </Grid>
                );
              })}
              <Grid item xs={3} sm={3} md={12} textAlign="center">
                <NavBtn
                  onClick={() => {
                    if (isLogin) {
                      dispatch(logout());
                      localStorage.removeItem("token");
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  {isLogin ? "Logout" : "Login"}
                </NavBtn>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <AlertModal />
    </Container>
  );
};

export default Navigation;

const BUTTONLIST = [
  { id: 1, name: "Dashboard" },
  { id: 2, name: "All board" },
  { id: 3, name: "My board" },
];

const Logo = styled.button`
  background-color: white;
  border: none;
  font-size: 40px;
  margin: 30px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const NavBtn = styled.button<{ primery?: boolean }>`
  background-color: ${(props) => (props.primery ? "#626fe9" : "white")};
  color: ${(props) => (props.primery ? "white" : "black")};
  border: none;
  font-size: 14px;
  padding: 12px;
  border-radius: 15px;
  &:hover {
    background-color: #626fe9;
    color: white;
    cursor: pointer;
  }
`;

const LogoImg = styled.img`
  width: 100px;
`;
