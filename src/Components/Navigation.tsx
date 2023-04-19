import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertModal from "./AlertModal";

const Navigation = () => {
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [navBtn, setNavBtn] = useState<string>("");
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f8fafb",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          height: 700,
        }}
      >
        <Grid>
          <Grid>
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
          <Stack spacing={2} direction="column" paddingLeft={4}>
            {BUTTONLIST.map(({ id, name }: { id: number; name: string }) => {
              return (
                <Grid item key={id}>
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
          </Stack>
        </Grid>
      </Box>
      <AlertModal modalOn={modalOn} setModalOn={setModalOn} />
    </>
  );
};

export default Navigation;

const BUTTONLIST = [
  { id: 1, name: "Profile" },
  { id: 2, name: "DashBoard" },
  { id: 3, name: "Trade" },
  { id: 4, name: "Login" },
];
