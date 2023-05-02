import { Grid, Typography } from "@mui/material";
import {
  axisBottom,
  axisLeft,
  curveCardinal,
  line,
  max,
  min,
  scaleBand,
  scaleLinear,
} from "d3";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { select } from "d3-selection";
import styled from "styled-components";

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
  const minValue: any = min(detailData, (d: any) => {
    return Math.ceil(d.converted_trade_price);
  });
  const date = detailData.map((d: any) =>
    d.candle_date_time_kst.slice(-13, -9)
  );

  const yScale = scaleLinear().domain([minValue, maxValue!]).range([300, 0]);
  const xScale = scaleBand().domain(date).range([0, 500]);
  const yAxis = axisLeft(yScale)
    .ticks(5)
    .tickFormat((d) => `${d}₩`);
  const xAxis = axisBottom(xScale);

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

      const lineGenerator = line()
        .x((d: any, i: number) => xScale(date[i])! + 140)
        .y((d: any) => yScale(d.converted_trade_price))
        .curve(curveCardinal);

      svg
        .append("rect")
        .attr("wdith", 600)
        .attr("height", 600)
        .style("display", "flex")
        .style("justify-contents", "center")
        .attr("fill", "yellow");

      svg
        .append("g")
        .attr("transform", `translate(100,0)`)
        .selectAll("circle")
        .data(detailData)
        .enter()
        .append("circle")
        .attr("r", 5)
        .attr("width", 70)
        .attr("height", (d: any) => 300 - yScale(d.converted_trade_price))
        .attr(
          "cx",
          (d: any) => xScale(d.candle_date_time_kst.slice(-13, -9))! + 40
        )
        .attr("cy", (d: any) => yScale(d.converted_trade_price))
        .attr("fill", "orange");

      svg
        .append("path")
        .datum(detailData)
        .attr("fill", "none")
        .attr("stroke", "orange")
        .attr("stroke-width", 2)
        .attr("d", lineGenerator(detailData));
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
          <GraphBox ref={ref}>
            <g>
              <rect></rect>
            </g>
          </GraphBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Graph;

const GraphBox = styled.svg`
  width: 700px;
  height: 400px;
`;
