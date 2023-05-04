import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useAppDispatch } from "../Store/store";

const MainCard = ({ data }: { data: any }) => {
  const [localData, setLocalData] = useState<string[]>(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });

  const delLocalData = (datas: string) => {
    const newData = localData.filter((item) => {
      return item !== datas;
    });
    localStorage.setItem("data", JSON.stringify(newData));
    console.log(localData);
    window.location.reload();
  };

  return (
    <Box sx={btnColor}>
      <Grid container alignItems="center">
        <Grid item xs={8} sm={8} md={8} lg={8}>
          <Typography variant="body2" p={2}>
            {data}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Button
            onClick={() => {
              delLocalData(data);
            }}
          >
            del
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainCard;
const btnColor = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  backgroundColor: "#effcf1",
  borderRadius: 5,
  padding: 1,
};
