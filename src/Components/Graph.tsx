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
  console.log(detailData);

  const ref = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<any>(null);

  const maxValue: any = max(detailData, (d: any) => {
    return d.opening_price;
  });
  const minValue: any = min(detailData, (d: any) => {
    return d.opening_price;
  });
  const date = detailData.map((d: any) =>
    d.candle_date_time_kst.slice(-13, -9)
  );

  const yScale = scaleLinear().domain([minValue, maxValue!]).range([300, 0]);
  const xScale = scaleBand().domain(date).range([0, 500]);
  const yAxis = axisLeft(yScale)
    .ticks(5)
    .tickFormat((d) => `${d}$`);
  const xAxis = axisBottom(xScale);

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const xAxisGroup = svg
        .append("g")
        .attr("transform", `translate(100,300)`)

        .call(xAxis);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const yAxisGroup = svg
        .append("g")
        .attr("transform", `translate(100,0)`)
        .call(yAxis);

      const lineGenerator = line()
        .x((d: any, i: number) => xScale(date[i])! + 125)
        .y((d: any) => yScale(d.opening_price))
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
        .attr("height", (d: any) => 300 - yScale(d.opening_price))
        .attr(
          "cx",
          (d: any) => xScale(d.candle_date_time_kst.slice(-13, -9))! + 25
        )
        .attr("cy", (d: any) => yScale(d.opening_price))
        .attr("fill", "#6365dd");

      svg
        .append("path")
        .datum(detailData)
        .attr("fill", "none")
        .attr("stroke", "#6365dd")
        .attr("stroke-width", 2)
        .attr("d", lineGenerator(detailData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailData]);

  return (
    <>
      <Grid
        container
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          backgroundColor: "#f5f6ff",
          overflow: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography padding={3}>{detailData[0]?.market}</Typography>
        </Grid>
        <Grid item>
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
  padding: 30px;
  width: 700px;
  height: 400px;
`;
