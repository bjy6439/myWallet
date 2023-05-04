import { Grid, Typography } from "@mui/material";
import {
  axisBottom,
  axisLeft,
  curveCardinal,
  dispatch,
  line,
  max,
  min,
  scaleBand,
  scaleLinear,
} from "d3";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store/store";
import { select } from "d3-selection";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Graph = () => {
  const svg = select("svg")
    .call((g) => g.select("svg").remove())
    .append("svg");
  const detailData: any = useSelector((state: RootState) => {
    return state.detailData.dataInfo;
  });

  const noData = localStorage.getItem("data")?.length === 2;

  console.log(noData);

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
        .append("g")
        .attr("transform", `translate(100,0)`)
        .selectAll("circle")
        .data(detailData)
        .enter();
      // .append("circle")
      // .attr("r", 5)
      // .attr("width", 70)
      // .attr("height", (d: any) => 300 - yScale(d.opening_price))
      // .attr(
      //   "cx",
      //   (d: any) => xScale(d.candle_date_time_kst.slice(-13, -9))! + 25
      // )
      // .attr("cy", (d: any) => yScale(d.opening_price))
      // .attr("fill", "#6365dd");
      // 원

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
        <Grid item></Grid>
        {noData ? (
          <>
            <div>스크랩한 종목이 없습니다.</div>
            <Link style={{ margin: "10px", textDecoration: "none" }} to="/all">
              종목 선택하러가기
            </Link>
          </>
        ) : (
          <GraphBox ref={ref}>
            <g>
              <rect></rect>
            </g>
          </GraphBox>
        )}
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
