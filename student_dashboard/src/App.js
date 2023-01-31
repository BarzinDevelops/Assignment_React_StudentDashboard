import React, { Fragment } from "react";
// import OverviewChart from "./components/charts/OverviewChart";
// import Testing from './components/charts/Testing';

import AssignmentChart from "./components/charts/AssignmentChart";
import StudentChart from "./components/charts/StudentChart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>}/>
          <Route path="student" element={<div>Student</div>}/>
        </Routes>
      </BrowserRouter>
      {/* <OverviewChart /> */}
      {/* <Testing /> */}
      <AssignmentChart />
      <StudentChart />
    </div>
  );
}

export default App;
