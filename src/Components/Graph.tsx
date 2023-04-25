import { Grid } from "@mui/material";
import axios from "axios";
import { axisBottom, axisLeft, scaleBand, scaleLinear, select } from "d3";
import React, { useEffect, useRef, useState } from "react";

const Graph = ({ name }: { name: string }) => {
  const [data, setData] = useState([]);
  const svgRef = useRef(null);

  const getData = () => {
    axios
      .get(`https://api.upbit.com/v1/candles/minutes/10?market=${name}&count=6`)
      .then((res) => setData(res.data.reverse()));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(name);

  const svg = select("svg");

  const chart = svg.append("g").attr("transform", `translate(${40}, ${0})`);
  const yScale = scaleLinear().range([15, 250]).domain([6000, 100]);
  chart.append("g").call(axisLeft(yScale));
  const xScale = scaleBand()
    .range([0, 250])
    .domain(
      data.map((s: any) => {
        return s.candle_date_time_kst.slice(-8, -3);
      })
    )
    .padding(0.2);

  chart
    .append("g")
    .attr("transform", `translate(0, ${250})`)
    .call(axisBottom(xScale));

  return (
    <>
      <div>제목</div>
      <Grid sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <svg ref={svgRef} style={{ padding: "10px", height: "300px" }}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </Grid>
    </>
  );
};

export default Graph;
