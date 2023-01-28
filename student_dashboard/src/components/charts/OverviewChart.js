import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
  VictoryTheme,
} from "victory";

import { wincTheme } from "./ChartStyles";
import {
  assignemtFullData,
  shortAssignmentNames,
  removeDuplicatesFromArray,
} from "../data/MethodsAndData";

// const { width, height } = Dimensions.get("screen");

const dataCodes = removeDuplicatesFromArray(shortAssignmentNames);
function OverviewChart() {
  console.log("assignemtFullData =>", assignemtFullData);
  // const uniqueAssignmentNames = removeDuplicatesFromArray(shortAssignmentNames);
  return (
    <div className="App">
      <VictoryChart
        theme={VictoryTheme.material}
        grid={VictoryTheme.material.axis.style.grid.strokeWidth = 0}
        width={1000}
        height={800}
        offsetX={5}
        // domainPadding={5}
      >
        <VictoryGroup 
                offset={20}
                // colorScale={["blue", "orange"]}
        >
        <VictoryBar
          style={{
            data: { width: 4, fill: "orange" },
          }}
          animate={{
            duration: 3000,
            easing: "bounce",
            onLoad: {
              duration: 3000,
            },
          }}
          labels={assignemtFullData.map((item) => item.fun)}
          // tickValues={[1, 2, 3, 4]}
          tickFormat={dataCodes}
          data={assignemtFullData}
          x="name"
          y="difficulty"
        />
        <VictoryBar
          style={{
            data: { width: 4, fill: "green" },
          }}
          animate={{
            duration: 3000,
            easing: "bounce",
            onLoad: {
              duration: 3000,
            },
          }}
          labels={assignemtFullData.map((item) => item.fun)}
          // tickValues={[1, 2, 3, 4]}
          tickFormat={dataCodes}
          data={assignemtFullData}
          x="name"
          y="difficulty"
        />

        </VictoryGroup>
        <VictoryAxis
          label="Time (ms)"
          // tickValues={[1,2,3,4,5,6]}
          tickFormat={assignemtFullData.map((item) => item.name)}
          style={{
            // padding: "50px",
            axis: { stroke: "black" },
            axisLabel: { fontSize: 20, padding: 200 },
            ticks: { stroke: "rgba(0, 0, 255, 0.405)", size: 15 },
            tickLabels: {
              fontSize: 8,
              padding: 10,
              angle: -55,
              
            },
          }}
          // fixLabelOverlap
          crossAxis={false}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "black" },
          }}
        />
      </VictoryChart>
    </div>
  );
}

export default OverviewChart;
