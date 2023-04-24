import { Box, Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import Navigation from "../Components/Navigation";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store/store";
import { getAllData } from "../Store/dataSlice";
import { onModal } from "../Store/modalSlice";
import CardModal from "../Components/CardModal";

const AllBoard = () => {
  const [dataName, setDataName] = useState("BTC");
  const market = useSelector((state: RootState) => state.mydata.myData);
  const dispatch = useAppDispatch();
  const isModal = useSelector((state: RootState) => state.modal.modal);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  console.log(isModal, "card");

  return (
    <Background>
      <Container>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 5,
            borderRadius: 2,
          }}
        >
          <Grid container sx={cardBox}>
            <Grid item xs={12} sm={12} md={5} lg={3}>
              <Navigation />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={9}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid
                  container
                  sx={{
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {BtnName.map(({ id, name }) => {
                    return (
                      <Grid
                        item
                        key={id}
                        xs={4}
                        sm={4}
                        md={4}
                        lg={4}
                        textAlign="center"
                      >
                        <Button
                          onClick={() => {
                            setDataName(name);
                          }}
                        >
                          {name}
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box
                  sx={{
                    height: 600,
                    overflow: "scroll",
                    padding: 4,
                    display: "flex",
                    justifyContent: "center",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  <Grid container spacing={2} justifyContent="center">
                    {market
                      .filter(({ market }: { market: string }) => {
                        return market.split("-")[0] === dataName;
                      })
                      .map((item, idx) => {
                        return (
                          <>
                            <Grid
                              key={idx}
                              item
                              xs={12}
                              sm={12}
                              md={6}
                              onClick={(event) => {
                                dispatch(onModal());
                                event?.stopPropagation();
                              }}
                            >
                              <Card item={item} />
                            </Grid>
                          </>
                        );
                      })}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {isModal && <CardModal />}
    </Background>
  );
};

export default AllBoard;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const cardBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 5,
};

const BtnName = [
  { id: 1, name: "BTC" },
  { id: 2, name: "KRW" },
  { id: 3, name: "USDT" },
];
