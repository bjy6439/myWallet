import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AlertModal from "./AlertModal";
import { useSelector } from "react-redux";
import { closeModal, onModal } from "../Store/modalSlice";
import { logout } from "../Store/authSlice";
import { RootState, useAppDispatch } from "../Store/store";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);

  return (
    <Container>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              <Typography variant="h4" padding={4} mt={2}>
                My Wallet
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} justifyContent="center" alignItems="center">
            <Grid container mb={3} textAlign="center">
              {BUTTONLIST.map(({ id, name }: { id: number; name: string }) => {
                return (
                  <Grid item key={id} xs={3} sm={3} md={12} textAlign="center">
                    <Button
                      variant="text"
                      onClick={() => {
                        if (name === "대시보드") {
                          navigate("/");
                        } else if (name === "모든 거래") {
                          navigate("/all");
                        } else {
                          dispatch(onModal());
                          setTimeout(() => {
                            dispatch(closeModal());
                          }, 1500);
                        }
                      }}
                    >
                      {name}
                    </Button>
                  </Grid>
                );
              })}
              <Grid item xs={3} sm={3} md={12} textAlign="center">
                <Button
                  variant="text"
                  onClick={() => {
                    if (isLogin) {
                      dispatch(logout());
                      localStorage.removeItem("token");
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  {isLogin ? "logout" : "login"}
                </Button>
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
  { id: 1, name: "대시보드" },
  { id: 2, name: "모든 거래" },
  { id: 3, name: "나의 거래" },
];
