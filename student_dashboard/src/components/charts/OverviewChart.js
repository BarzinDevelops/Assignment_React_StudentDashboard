import React, { Fragment } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
} from "victory";

import { wincTheme } from "./ChartStyles";
import { assignemtFullData } from "../data/MethodsAndData";

function OverviewChart() {
  // const uniqueAssignmentNames = removeDuplicatesFromArray(shortAssignmentNames);
  return (
    <div className="App">
      <VictoryChart theme={wincTheme} domainPadding={15}>
        <VictoryGroup offset={20}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={assignemtFullData.map((item) => item.name)}
            data={assignemtFullData}
            x="name"
            y="difficulty"
          />
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={assignemtFullData.map((item) => item.name)}
            data={assignemtFullData}
            x="name"
            y="fun"
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignemtFullData.map((item) => item.name)}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    </div>
  );
}

export default OverviewChart;
