import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";
import Graph from "./Graph";

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
    window.location.reload();
  };

  console.log(data);

  return (
    <Box sx={btnColor}>
      <Grid container alignItems="center">
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Img src="/images/logo.png"></Img>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
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
            <RiDeleteBin6Line />
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

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
