import { Grid, Typography } from "@mui/material";
import { axisBottom, axisLeft, max, scaleBand, scaleLinear } from "d3";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { select } from "d3-selection";

const Graph = () => {
  const svg = select("svg")
    .call((g) => g.select("svg").remove())
    .append("svg");
  const detailData: any = useSelector((state: RootState) => {
    return state.detailData.dataInfo;
  });
  const ref = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<any>(null);

  const maxValue: any = max(detailData, (d: any) => {
    return Math.ceil(d.converted_trade_price);
  });
  const date = detailData.map((d: any) =>
    d.candle_date_time_kst.slice(-13, -9)
  );

  const y = scaleLinear().domain([0, maxValue!]).range([300, 0]);
  const x = scaleBand().domain(date).range([0, 300]).padding(0.2);
  const yAxis = axisLeft(y)
    .ticks(10)
    .tickFormat((d) => `${d}₩`);
  const xAxis = axisBottom(x);

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current));
    } else {
      const xAxisGroup = svg
        .append("g")
        .attr("transform", `translate(100,300)`)
        .call(xAxis);
      const yAxisGroup = svg
        .append("g")
        .attr("transform", `translate(100,0)`)
        .call(yAxis);

      svg
        .append("rect")
        .attr("wdith", 500)
        .attr("height", 500)
        .attr("fill", "yellow");

      svg
        .append("g")
        .attr("transform", `translate(100,0)`)
        .selectAll("rect")
        .data(detailData)
        .enter()
        .append("rect")
        .attr("width", 30)
        .attr("height", (d: any) => 300 - y(d.converted_trade_price))
        .attr("x", (d: any) => x(d.candle_date_time_kst.slice(-13, -9))!)
        .attr("y", (d: any) => y(d.converted_trade_price))
        .attr("fill", "orange");
    }
  }, [detailData]);

  return (
    <>
      <Grid
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          backgroundColor: "#f5f6ff",
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography padding={3}>{detailData[0]?.market}</Typography>
        <Grid>
          <svg ref={ref} width={500} height={350}>
            <g>
              <rect></rect>
            </g>
          </svg>
        </Grid>
      </Grid>
    </>
  );
};

export default Graph;
