import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertModal from "./AlertModal";

const Navigation = () => {
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [navBtn, setNavBtn] = useState<string>("");
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "#f8fafb",
        }}
      >
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
                  <Grid key={id} xs={3} sm={3} md={12} textAlign="center">
                    <Button
                      variant="text"
                      onClick={() => {
                        if (name === "Login") {
                          setNavBtn(name);
                          navigate("/login");
                        } else {
                          setModalOn(true);
                          setNavBtn(name);
                        }
                      }}
                    >
                      {name}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <AlertModal modalOn={modalOn} setModalOn={setModalOn} />
    </Container>
  );
};

export default Navigation;

const BUTTONLIST = [
  { id: 1, name: "Profile" },
  { id: 2, name: "DashBoard" },
  { id: 3, name: "Trade" },
  { id: 4, name: "Login" },
];
