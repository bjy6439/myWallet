import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Navigation from "../Components/Navigation";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store/store";
import { getAllData } from "../Store/dataSlice";
import styled from "styled-components";

const AllBoard = () => {
  const market = useSelector((state: RootState) => state.mydata.myData);
  const dispatch = useAppDispatch();
  const [nowBtn, setNowBtn] = useState<string>("BTC");
  const [localData, setLocalData] = useState(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });
  console.log(localData);

  useEffect(() => {
    dispatch(getAllData());
    localStorage.setItem("category", "BTC");
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
        <Grid container sx={cardBox}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Navigation />
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: "10vh",
                }}
              >
                {BtnName.map(({ id, name }) => {
                  return (
                    <Grid item key={id} textAlign="center">
                      <NavBtn
                        primery={nowBtn === name}
                        onClick={() => {
                          localStorage.setItem("category", name);
                          setNowBtn(name);
                        }}
                      >
                        {name}
                      </NavBtn>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                sx={{
                  overflow: "scroll",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  height: "70vh",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                <Grid container spacing={2} justifyContent="center">
                  {market
                    .filter(({ market }: { market: string }) => {
                      return (
                        market.split("-")[0] ===
                        localStorage.getItem("category")
                      );
                    })
                    .map((item: any) => {
                      return (
                        <Grid item xs={12} sm={12} md={6} key={item.market}>
                          <Card
                            item={item}
                            localData={localData}
                            setLocalData={setLocalData}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AllBoard;

const cardBox = {
  display: "flex",
  justifyContent: "center",
};

const BtnName = [
  { id: 1, name: "BTC" },
  { id: 2, name: "KRW" },
  { id: 3, name: "USDT" },
];

const NavBtn = styled.button<{ primery?: boolean }>`
  background-color: ${(props) => (props.primery ? "#626fe9" : "white")};
  color: ${(props) => (props.primery ? "white" : "black")};
  border: none;
  font-size: 14px;
  padding: 12px;
  border-radius: 15px;
  &:hover {
    background-color: #626fe9;
    color: white;
    cursor: pointer;
  }
`;
