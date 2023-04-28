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

  const barsData = detailData?.map((item: any, index: number) => ({
    date: item.candle_date_time_kst.slice(-13, -9) + "일",
    value: item.converted_trade_price,
    id: index,
  }));

  const opPrice = detailData.map((item: any) => {
    return item.converted_trade_price;
  });
  const maxOpPrice = Math.ceil(Math.max(...opPrice));
  const minOpPrice = Math.floor(Math.min(...opPrice));

  const makeGraph = () => {
    const svg = select("svg")
      .call((g) => g.select("svg").remove())
      .append("svg");
    const chart = svg.append(`g`).attr("transform", `translate(${100}, ${0})`);
    const yScale = scaleLinear()
      .range([0, 250])
      .domain([maxOpPrice, minOpPrice]);
    chart.append(`g`).call(axisLeft(yScale));
    const xScale = scaleBand()
      .range([0, 300])
      .domain(
        barsData.map(({ date }: { date: string }) => {
          return date;
        })
      )
      .padding(0.2);

    console.log(barsData);

    chart
      .append(`g`)
      .attr("transform", `translate(0, 250)`)
      .call(axisBottom(xScale))
      .data(barsData)
      .append("rect")
      .attr("fill", "steelblue")
      .attr("height", (d: any) => maxOpPrice - d.value)
      .attr("width", 30)
      .attr("x", (d: any) => d.id + 1 * 40)
      .attr("y", 0)
      .attr("opacity", 0.7);
  };

  useEffect(() => {
    makeGraph();
  }, [detailData]);

  return (
    <>
      <Grid
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          backgroundColor: "#f5f6ff",
        }}
      >
        <Typography padding={3}>{detailData[0]?.market}</Typography>
        <Grid>
          <svg
            ref={svgRef}
            style={{
              padding: "10px",
              height: "300px",
              width: "500px",
            }}
          >
            <g className="x-axis" />
            <g className="y-axis" />
          </svg>
        </Grid>
      </Grid>
    </>
  );
};

export default Graph;
