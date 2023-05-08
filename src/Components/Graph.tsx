import { Grid } from "@mui/material";
import {
  axisBottom,
  axisLeft,
  curveLinear,
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
import { Link } from "react-router-dom";

const Graph = () => {
  const [selection, setSelection] = useState<any>(null);
  const svg = select("svg")
    .call((g) => g.select("svg").remove())
    .append("svg");
  const detailData: any = useSelector((state: RootState) => {
    return state.detailData.dataInfo;
  });

  const a = detailData[0]?.market.indexOf("KRW") !== -1 ? "₩" : "$";

  const noData =
    localStorage.getItem("data") === "[]" ||
    localStorage.getItem("data") === null;

  const ref = useRef<SVGSVGElement | null>(null);

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
    .tickFormat((d) => `${d}${a}`);
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
        .curve(curveLinear);

      // svg
      //   .append("g")
      //   .attr("transform", `translate(100,0)`)
      //   .selectAll("circle")
      //   .data(detailData)
      //   .enter()
      //   .append("circle")
      //   .attr("r", 5)
      //   .attr("height", (d: any) => 300 - yScale(d.opening_price))
      //   .attr(
      //     "cx",
      //     (d: any) => xScale(d.candle_date_time_kst.slice(-13, -9))! + 25
      //   )
      //   .attr("cy", (d: any) => yScale(d.opening_price))
      //   .attr("fill", "#6365dd");

      // 원

      const path = svg
        .append("g")
        .attr("transform", `translate(0,0)`)
        .append("path")
        .datum(detailData)
        .attr("fill", "none")
        .attr("stroke", "#6365dd")
        .attr("stroke-width", 2)
        .attr("d", lineGenerator(detailData));

      path
        .attr("stroke-dasharray", path.node()?.getTotalLength() || "0")
        .attr("stroke-dashoffset", path.node()?.getTotalLength() || "0")
        .transition()
        .duration(3000)
        .attr("stroke-dashoffset", "0");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailData]);

  return (
    <>
      <Grid
        container
        sx={{
          height: "50vh",
          overflow: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {noData ? (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            xs={12}
            sm={12}
            md={12}
          >
            <p>스크랩한 종목이 없습니다.</p>
            <Link style={{ margin: "10px", textDecoration: "none" }} to="/all">
              종목 선택하러가기
            </Link>
          </Grid>
        ) : (
          <Grid>
            <p>{detailData[0]?.market}</p>
            <GraphBox ref={ref}>
              <g>
                <rect></rect>
              </g>
            </GraphBox>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Graph;

const GraphBox = styled.svg`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 800px;
  height: 400px;
`;
