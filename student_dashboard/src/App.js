import React, { Fragment } from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
} from "victory";
import "./App.css";

import studentData from "./assets/student.json";

const filterByAssignmentName = (nameAssignment) => {
  const opdracht = studentData.filter(
    (student) =>
      student["Welke opdracht of welk project lever je nu in?"] ===
      nameAssignment
  );

  return opdracht;
};

// filterByAssignmentName()

function App() {
  // --------spelen met studenten data:------

  // Get assignment subjects -------------

  const opdracht = studentData.map(
    (student) => student["Welke opdracht of welk project lever je nu in?"]
  );

  const projects = opdracht.map((item) => {
    if (item.includes(" -")) {
      return item.substring(0, 3);
    }
    return item;
  });
  // ----------------------------------------

  // Remove dublicate in subjects array:

  function removeDuplicates(arr) {
    let unique = arr.reduce(function (acc, curr) {
      if (!acc.includes(curr)) acc.push(curr);
      return acc;
    }, []);
    return unique;
  }
  const uniqueProjectCodes = removeDuplicates(projects);
  // console.log(uniqueProjectCodes);

  /* --------------------------------- */

  // Gets array of objects and name of property as prams to calculate average.
  const getAverage = (objectsArray, objectPropName) => {
    let totalEarning = objectsArray.reduce(
      (prev, curr) => prev + curr[objectPropName],
      0
    );
    return totalEarning / objectsArray.length;
  };

  console.log(
    'getAverage(data, "earnings") =>',
    getAverage(
      filterByAssignmentName("W1D2-3"),
      "Hoe moeilijk vond je deze opdracht?"
    )
  );

  const data = [{ subject: "WD1-1", difficulty: 4 }];

  const assignemtFullData = opdracht.map((item) => {
    const filtered = filterByAssignmentName(item);
    const difficulty = getAverage(
      filtered,
      "Hoe moeilijk vond je deze opdracht?"
    );
    const fun = getAverage(filtered, "Hoe leuk vond je deze opdracht?");

    // return { name: item, difficulty, fun }
    return { name: item, difficulty, fun };
  });

  console.log("assignemtFullData => ", assignemtFullData);
  return (
    <div className="App">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={30}
        padding={50}
        // height={200}
        // width={100}
      >
        {/* <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={uniqueProjectCodes}
        />
        <VictoryAxis dependentAxis tickFormat={["1", "2", "3", "4", "5"]} /> */}
        <VictoryGroup>
          {/* { assignemtFullData.map(item=> 
          <Fragment>
            <VictoryBar
            //  height={10}
            style={{
              data: { fill: "green" },
            }}
            data={item}
            // data accessor for x values
            x="difficulty"
            // data accessor for y values
            y="fun"
          />
            <VictoryBar
            //  height={10}
            style={{
              data: { fill: "red" },
            }}
            data={item}
            // data accessor for x values
            x="difficulty"
            // data accessor for y values
            y="fun"
          />
          </Fragment>
          )} */}
          <VictoryBar
            //  height={10}
            style={{
              data: { fill: "green" },
            }}
            data={assignemtFullData}
            // data accessor for x values
            // x="difficulty"
            // data accessor for y values
            y="fun"
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default App;
