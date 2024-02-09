import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Driver from "./pages/driver/Driver";
import Jobs from "./pages/jobs/Jobs";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import React, { Component } from "react";
import firebase from "./firebase/firebase";
import Cookies from "js-cookie";

function App() {
  const currentUser = firebase.auth().currentUser;
  const isLoggedIn = Cookies.get("firebaseToken");

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn ? (
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/driver" element={<Driver />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </Sidebar>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
