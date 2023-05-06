import { Box, Button, Container, Grid } from "@mui/material";
import { addMyData } from "../Store/myDataSlice";
import { useAppDispatch } from "../Store/store";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
  const eName = item.english_name;
  const [localData, setLocalData] = useState(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });
  const [icon, setIcon] = useState<string>("/images/logo.png");

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

  const getIcons = async () => {
    const res = await axios.get("/data/icons.json");
    res.data.filter((icon: any) => {
      if (icon.name === item.market) {
        return setIcon(icon.src);
      }
    });
  };

  useEffect(() => {
    getIcons();
  });

  return (
    <>
      <Container>
        <Box sx={style}>
          <Grid container p={2} padding={2}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Img src={icon} alt={"icon"}></Img>
            </Grid>
            <Grid item xs={8} sm={8} md={8} lg={8}>
              <Grid>
                <Grid container>
                  <Grid item xs={9} sm={9} md={9} m={1}>
                    {item.market}
                  </Grid>
                  <Grid item xs={1} sm={1} md={1}>
                    <Button
                      onClick={() => {
                        dispatch(addMyData(item.market));
                        addLocalData(`${item.market}`);
                      }}
                    >
                      {localData.includes(item.market) ? (
                        <AiFillStar />
                      ) : (
                        <AiOutlineStar />
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} m={1}>
                {eName}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Card;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
