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
      <VictoryChart domainPadding={15} theme={wincTheme}>
      <VictoryGroup offset={20}>
        <VictoryBar
          // labelComponent={<VictoryTooltip />}
          data={assignemtFullData}
          x=""
          y="difficulty"
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignemtFullData.map(
            avg => avg.name
          )}
          labels={assignemtFullData.map(item=>item.difficulty)}
        />
        <VictoryBar
          // labelComponent={<VictoryTooltip />}
          data={assignemtFullData}
          x="name"
          y="fun"
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignemtFullData.map(
            avg => avg.name
          )}
          labels={assignemtFullData.map(item=>item.fun)}
        />
      </VictoryGroup>
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={assignemtFullData.map(
          avg => avg.name
        )}
        label={"Hallloooooo"}
      />
      <VictoryAxis dependentAxis />
    </VictoryChart>

    </div>
  );
}

export default OverviewChart;
