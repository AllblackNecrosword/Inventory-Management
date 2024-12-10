import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./User/Home";
import Dashboard from "./Admin/Dashboard";
import Login from "./Shared/Login";
import Addproduct from "./Pages/Addproduct";
import Viewproducts from "./Pages/Viewproducts";
import DashboardContent from "./Admin/DashboardContent";
import ProtectedRoute from "./protect/ProtectedRoute";

import { useDispatch } from "react-redux";
import Profile from "./Pages/Profile";
import useGetStatus from "./hooks/useGetStatus";
import useGetAllJobs from "./hooks/useGetAllJobs";
import useGetLoginStatus from "./hooks/useGetLoginStatus";

function App() {
  const getLoginStatus = useGetLoginStatus();

  useEffect(() => {
    const fetchLoginStatus = async () => {
      await getLoginStatus();
    };
    fetchLoginStatus();
  }, [getLoginStatus]);

  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard (Admin) */}
      <Route
        path="/dash"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        {/* Nested routes for the Dashboard */}
        <Route index element={<DashboardContent />} />{" "}
        {/* Default dashboard content */}
        <Route path="addproduct" element={<Addproduct />} />
        <Route path="viewproduct" element={<Viewproducts />} />
        <Route path="profile" element={<Profile />} />
        {/* <Route path="updateProduct/:id" element={<UpdateProduct />}/> */}
      </Route>
    </Routes>
  );
}

export default App;
