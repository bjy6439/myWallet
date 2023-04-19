import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import AlertModal from "./AlertModal";

const Navigation = () => {
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [navBtn, setNavBtn] = useState<string>("");
  console.log(navBtn);
  return (
    <>
      <Box sx={{ bgcolor: "#f8fafb", borderRadius: "5px" }}>
        <Grid>
          <Grid>
            <Typography variant="h4" padding={4}>
              My Wallet
            </Typography>
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
