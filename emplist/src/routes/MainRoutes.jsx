import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";




function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}

export default MainRoutes;