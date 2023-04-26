import { Grid, Typography } from "@mui/material";
import { axisBottom, axisLeft, scaleBand, scaleLinear, select } from "d3";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

const Graph = () => {
  const detailData: any = useSelector((state: RootState) => {
    return state.detailData.dataInfo;
  });
  const svgRef = useRef(null);

  const makeGraph = () => {
    const svg = select("svg");
    const chart = svg.append(`g`).attr("transform", `translate(${100}, ${0})`);
    const opPrice = detailData[1]?.opening_price * 100000000;
    const yScale = scaleLinear()
      .range([0, 250])
      .domain([opPrice + 10000, opPrice]);
    chart.append(`g`).call(axisLeft(yScale));
    const xScale = scaleBand()
      .range([0, 300])
      .domain(
        detailData.map((s: any) => {
          return s.candle_date_time_kst.slice(-8, -3);
        })
      )
      .padding(0.2);
    chart
      .append(`g`)
      .attr("transform", `translate(0, 250)`)
      .call(axisBottom(xScale));
  };

  useEffect(() => {
    makeGraph();
  }, [detailData]);

  return (
    <>
      <Grid sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <Typography padding={3}>제목</Typography>
        <svg
          ref={svgRef}
          style={{ padding: "10px", height: "300px", width: "500px" }}
        >
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </Grid>
    </>
  );
};

export default Graph;
