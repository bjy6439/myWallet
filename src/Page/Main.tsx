import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import Graph from "../Components/Graph";
import { useAppDispatch } from "../Store/store";
import { getDetailData } from "../Store/detailDataSlice";
import MainCard from "../Components/MainCard";
import axios from "axios";

const Main = () => {
  const dispatch = useAppDispatch();
  const [localData, setLocalData] = useState<string[]>(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });
  const [datas, setDatas] = useState<any>([]);

  const getData = async (name: string) => {
    const res = await axios.get(
      `https://api.upbit.com/v1/candles/days?market=${name}&count=1`
    );
    setDatas((prev: any) => {
      const newDatas = [...prev, res.data[0]];
      return newDatas;
    });
  };

  const storedData = localStorage.getItem("data");
  const ccc: string | null = storedData
    ? JSON.parse(storedData)[0]
    : "USDT-ETH";

  const getItem = () => {
    localData.map((item: string) => {
      return getData(item);
    });
  };

  useEffect(() => {
    // localStorage.setItem("data", "");
    setTimeout(() => {
      dispatch(getDetailData(`${ccc}`));
    }, 1000);
    getItem();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 5,
          borderRadius: 2,
          marginY: 4,
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Navigation />
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Box>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} m={2}>
                      <Graph />
                    </Grid>
                    <Grid
                      container
                      sx={{
                        height: "300px",
                        overflowY: "scroll",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      m={2}
                    >
                      {datas.map((item: any) => {
                        return (
                          <Grid
                            item
                            key={item.market}
                            xs={12}
                            sm={5}
                            md={5}
                            lg={5}
                            m={1}
                            onClick={() => {
                              dispatch(getDetailData(item.market));
                            }}
                          >
                            <MainCard data={item} />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Main;
