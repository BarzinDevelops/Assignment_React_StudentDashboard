import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

import { wincTheme } from "./ChartStyles";
import {
  assignmentFullData,
  shortAssignmentNames,
  removeDuplicatesFromArray,
} from "../data/MethodsAndData";

const dataCodes = removeDuplicatesFromArray(shortAssignmentNames);
function OverviewChart() {
  console.log("assignemtFullData =>", assignmentFullData);
  // const uniqueAssignmentNames = removeDuplicatesFromArray(shortAssignmentNames);
  return (
    <div className="App">
      <div className="overview-chart">
        <VictoryChart
          domainPadding={20}
          theme={wincTheme}
        >
          <VictoryGroup offset={8}>
            <VictoryBar
              data={assignmentFullData}
              x="name"
              y="difficulty"
              labels={assignmentFullData.map((item) => item.difficulty)}
            />
            <VictoryBar
              data={assignmentFullData}
              x="name"
              y="fun"
              labels={assignmentFullData.map((item) => item.fun)}
            />
          </VictoryGroup>
          <VictoryAxis
            style={{
              axisLabel: { padding: 150 },
            }}
            tickValues={assignmentFullData.map((item) => item.name)}
            tickFormat={assignmentFullData.map((item) => item.name)}
            label="All Module Subjects"
          />
          <VictoryAxis
            dependentAxis
            style={{
              axisLabel: { padding: 40 },
            }}
            label="Grades for Assignments Difficulty and Enjoyment"
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default OverviewChart;
