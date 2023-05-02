import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import Graph from "../Components/Graph";
import { RootState, useAppDispatch } from "../Store/store";
import { getDetailData } from "../Store/detailDataSlice";
import { useSelector } from "react-redux";
import MainCard from "../Components/MainCard";

const Main = () => {
  const dispatch = useAppDispatch();
  // const myAlldata = useSelector(
  //   (state: RootState) => state.myAlldata.myAllData
  // );
  const [localData, setLocalData] = useState<string[]>(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    dispatch(getDetailData());
  }, []);

  return (
    <Container>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 5,
          borderRadius: 2,
          marginTop: 2,
        }}
      >
        <Grid container sx={cardBox}>
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
                    <Grid item xs={12} sm={10} md={12} lg={12}>
                      <Typography variant="subtitle1">
                        나의 관심 종목
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        height: "200px",
                        overflowY: "scroll",
                      }}
                      m={2}
                    >
                      {localData.map((data: any) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            sm={5}
                            md={5}
                            lg={5}
                            m={1}
                            onClick={() => {
                              dispatch(getDetailData(data));
                            }}
                          >
                            <MainCard data={data} />
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

// const Background = styled.div`
//   /* background-color: #ece8e7;
//   width: 100vw;
//   /* height: 100vh; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
const cardBox = {
  // display: "flex",
  // justifyContent: "center",
};
