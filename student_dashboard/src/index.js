import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './routes/Home';
import Assignments from './routes/Assignments';
import Assignment from './routes/Assignment';
import Students from './routes/Students';
import Student from './routes/Student';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index="Home" element={<Home />} />
        <Route path="Students" element={<Students />}>
          <Route path=":StudentId" element={<Student />} />
        </Route>
        <Route path="Assignments" element={<Assignments />}>
          <Route path=":AssignmentId" element={<Assignment />} />
        </Route>
        <Route
          path="*"
          element={
          <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
          </main>
        }
        />
      </Route>
    </Routes>  
    </BrowserRouter>
  </React.StrictMode>
);