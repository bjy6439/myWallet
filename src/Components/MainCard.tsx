import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../Store/store";
import Graph from "./Graph";

const MainCard = ({ data }: { data: any }) => {
  const [localData, setLocalData] = useState<string[]>(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });
  const detailData: any = useSelector((state: RootState) => {
    return state.detailData.dataInfo;
  });
  const delLocalData = (datas: string) => {
    const newData = localData.filter((item) => {
      return item !== datas;
    });
    localStorage.setItem("data", JSON.stringify(newData));
    window.location.reload();
  };
  const [icon, setIcon] = useState<string>("/imgaes/logo.png");

  const changes = data.change_price < 0;
  const isSelect = detailData[0]?.market === data.market;
  console.log(data);

  const getIcons = async () => {
    const res = await axios.get("/data/icons.json");
    res.data.filter((icon: any) => {
      if (icon.name === data.market) {
        return setIcon(icon.src);
      }
    });
  };

  const roundedNum = Math.ceil(data.change_rate * 10000) / 10000;
  const roundedStr = roundedNum.toFixed(2);

  useEffect(() => {
    getIcons();
  });

  return (
    <BtnColor changes={changes} isSelect={isSelect}>
      <Grid container alignItems="center" p={1}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Img src={icon}></Img>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} p={1}>
          <Typography variant="body2">{data.market}</Typography>
          <Typography variant="body2">
            {changes ? "" : "+"}
            {roundedStr}%
          </Typography>
          {/* <Typography variant="body2">{data.}</Typography> */}
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
    </BtnColor>
  );
};

export default MainCard;
const BtnColor = styled.div<{ changes?: boolean; isSelect?: boolean }>`
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
