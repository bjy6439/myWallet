import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../Store/store";

const MainCard = ({
  item,
  delLocalData,
  localData,
}: {
  item: string;
  delLocalData: any;
  localData: any;
}) => {
  const detailData: any = useSelector((state: RootState) => {
    return state.detailData.dataInfo;
  });
  const [data, setData] = useState<any>();
  const [icon, setIcon] = useState<string>("/images/logo.png");

  const getData = async (name: string) => {
    const res = await axios.get(
      `https://api.upbit.com/v1/candles/days?market=${name}&count=1`
    );
    setData(res.data[0]);
  };

  const getIcons = async () => {
    const res = await axios.get("/data/icons.json");
    res.data.filter((icon: any) => {
      if (icon.name === item) {
        const src = icon.src;
        return setIcon(src);
      }
    });
  };

  const roundedNum = Math.ceil(data?.change_rate * 10000) / 10000;
  const roundedStr = roundedNum.toFixed(2);
  const changes = data?.change_price < 0;
  const isSelect = detailData[0]?.market === data?.market;

  useEffect(() => {
    getData(item);
    getIcons();
  }, [localData]);

  return (
    <>
      {data && (
        <BoxColor changes={changes} isSelect={isSelect}>
          <Grid container alignItems="center" p={1}>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Img src={icon}></Img>
            </Grid>
            <Grid item xs={8} sm={8} md={8} lg={8} p={1}>
              <Typography variant="body2">{data?.market}</Typography>
              <Typography variant="body2">
                {changes ? "" : "+"}
                {roundedStr}%
              </Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Button
                onClick={() => {
                  delLocalData(data.market);
                }}
              >
                <RiDeleteBin6Line />
              </Button>
            </Grid>
          </Grid>
        </BoxColor>
      )}
    </>
  );
};

export default MainCard;
const BoxColor = styled.div<{ changes?: boolean; isSelect?: boolean }>`
  box-shadow: ${(props) =>
    props.isSelect
      ? "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
  background-color: ${(props) => (props.changes ? "#feeaf3" : "#effcf1")};
  border-radius: 10px;
  padding: 3px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
