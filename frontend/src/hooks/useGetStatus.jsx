import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
const useGetStatus = () => {
  const { isloggedin, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("Status", isloggedin);
  console.log("User detail", user);

  useEffect(() => {
    if (isloggedin) {
      navigate("/dash");
    }
  }, [isloggedin, user, navigate]);
};

export default useGetStatus;
