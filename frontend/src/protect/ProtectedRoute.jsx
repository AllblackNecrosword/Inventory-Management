import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isloggedin);
  const navigate = useNavigate();
  if (!isLoggedIn) {
    return navigate("/");
  }
  return children;
};

export default ProtectedRoute;
