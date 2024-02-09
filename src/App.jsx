import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Driver from "./pages/driver/Driver";
import Jobs from "./pages/jobs/Jobs";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import React, { Component } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </Sidebar> */}

        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
