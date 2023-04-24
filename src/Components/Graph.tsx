import axios from "axios";
import { axisBottom, axisRight, scaleBand, scaleLinear, select } from "d3";
import React, { useEffect, useRef, useState } from "react";

const Graph = () => {
  const [data, setData] = useState([]);
  const svgRef = useRef(null);

  console.log(data);

  const getData = () => {
    axios
      .get(
        "https://api.upbit.com/v1/candles/minutes/10?market=KRW-BTC&count=100"
      )
      .then((res) => setData(res.data.reverse()));
  };
  useEffect(() => {
    getData();
  }, []);

  // const chart = BarChart(data, {
  //   x: (data: any) => data.candle_date_time_kst,
  //   y: (data: any) => data.opening_price,
  //   yFormat: "%",
  //   yLabel: "↑ Frequency",
  //   width: 0,
  //   height: 500,
  //   color: "steelblue",
  //   duration: 750, // slow transition for demonstration
  // });

  return (
    <>
      {/* <svg
        ref={svgRef}
        style={{ padding: "10px", height: "100vh", width: "800vw" }}
      >
        <g className="x-axis" />
        <g className="y-axis" />
      </svg> */}
    </>
  );
};

export default Graph;
