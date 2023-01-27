import React, { Fragment } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
} from "victory";

import { wincTheme } from "./ChartStyles";

import {
  filterByAssignmentName,
  fullAssignmentNames,
  shortAssignmentNames,
} from "../data/Methods";

function OverviewChart() {
  // const uniqueAssignmentNames = removeDuplicatesFromArray(shortAssignmentNames);

  // Gets array of objects and name of property as prams to calculate average.
  const getAverage = (objectsArray, objectPropName) => {
    let totalEarning = objectsArray.reduce(
      (prev, curr) => prev + curr[objectPropName],
      0
    );
    return totalEarning / objectsArray.length;
  };

  const assignemtFullData = fullAssignmentNames.map((item) => {
    const filtered = filterByAssignmentName(item);
    const difficulty = getAverage(
      filtered,
      "Hoe moeilijk vond je deze opdracht?"
    );
    const fun = getAverage(filtered, "Hoe leuk vond je deze opdracht?");
    return { label: item, name: item, difficulty, fun };
  });

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
