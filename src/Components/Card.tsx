import { Box, Button, Container, Grid } from "@mui/material";
import { addMyData } from "../Store/myDataSlice";
import { useAppDispatch } from "../Store/store";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";

const style = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: 5,
  backgroundColor: "#effcf1",
};

interface data {
  market: string;
  korean_name: string;
  english_name: string;
}

const Card = ({ item }: { item: data }) => {
  const dispatch = useAppDispatch();
  const kName = item.korean_name;
  const eName = item.english_name;
  const [localData, setLocalData] = useState(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });

  const addLocalData = (data: string) => {
    if (!localData.includes(data)) {
      const newData = [...localData, data];
      localStorage.setItem("data", JSON.stringify(newData));
      setLocalData(newData);
      window.location.reload();
    } else {
      const delData = localData.filter((item: string) => {
        return item !== data;
      });
      localStorage.setItem("data", JSON.stringify(delData));
      window.location.reload();
    }
  };

  return (
    <>
      <Container>
        <Box sx={style}>
          <Grid container p={2} padding={2}>
            <Grid item xs={9} sm={9} md={9} m={1}>
              마켓 : {item.market}
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
              <Button
                onClick={() => {
                  dispatch(addMyData(item.market));
                  addLocalData(`${item.market}`);
                }}
              >
                {localData.includes(item.market) ? "x" : <AiOutlinePlus />}
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} m={1}>
              한국명 : {kName}
            </Grid>
            <Grid item xs={12} sm={12} md={12} m={1}>
              영문명 : {eName}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Card;
