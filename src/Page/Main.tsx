import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import Graph from "../Components/Graph";
import { useAppDispatch } from "../Store/store";
import { getDetailData } from "../Store/detailDataSlice";
import MainCard from "../Components/MainCard";

const Main = () => {
  const dispatch = useAppDispatch();
  const [localData, setLocalData] = useState<string[]>(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });

  const storedData = localStorage.getItem("data");
  const initialData: string | null = storedData
    ? JSON.parse(storedData)[0]
    : "USDT-ETH";

  const delLocalData = (name: string) => {
    const newData = localData.filter((item) => {
      return item !== name;
    });
    setLocalData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  useEffect(() => {
    dispatch(getDetailData(`${initialData}`));
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
          <button onClick={getUserInfo}>123</button>
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
                      {localData.map((item: any) => {
                        return (
                          <Grid
                            item
                            key={item}
                            xs={12}
                            sm={5}
                            md={5}
                            lg={5}
                            m={1}
                            onClick={() => {
                              dispatch(getDetailData(item));
                            }}
                          >
                            <MainCard
                              item={item}
                              delLocalData={delLocalData}
                              localData={localData}
                            />
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
