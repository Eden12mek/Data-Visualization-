import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./AdminDashboard/Main";
import Add from "./AdminDashboard/Add";
import Profile from "./AdminDashboard/Profile";
import Side from "./AdminDashboard/Profile";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Add />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/side" element={<Side/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
