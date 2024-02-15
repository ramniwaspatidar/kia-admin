import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Jobs from "./pages/jobs/Jobs";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import React, { Component, useEffect, useState } from "react";
import firebase from "./firebase/firebase";
import Cookies from "js-cookie";
import DriverRequest from "./pages/driver/DriverRequest";
import DriverCodeRequest from "./pages/codeRequest/DriverCodeRequest";
import { ToastContainer, toast } from "react-toast";

function App() {
  const [isLogin, setIsLogin] = useState("");
  const isLoggedIn = Cookies.get("firebaseToken");

  React.useEffect(() => {
    setIsLogin(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        {isLogin ? (
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/driver-request" element={<DriverRequest />} />
              <Route path="/driver-code-request" element={<DriverCodeRequest />} />
              {/* <Route path="/jobs" element={<Jobs />} /> */}
            </Routes>
          </Sidebar>
        ) : (
          <Routes>
            <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
          </Routes>
        )}
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
