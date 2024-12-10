// import axios from "axios";
// import React from "react";
// import { setisLoggedin } from "@/Redux/authSlice";
// import { useDispatch } from "react-redux";

// const useGetLoginStatus = async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/api/loginstatus");
//     useDispatch(setisLoggedin(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default useGetLoginStatus;
import { useDispatch } from "react-redux";
import { setisLoggedin } from "@/Redux/authSlice";
import axios from "axios";

const useGetLoginStatus = () => {
  const dispatch = useDispatch();

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/loginstatus",
        {
          withCredentials: true,
        }
      );
      console.log("Login status response",response.data);
      dispatch(setisLoggedin(response.data));
      return response.data; // Return the status
    } catch (error) {
      console.error(error);
      return false; // Handle error gracefully
    }
  };

  return checkLoginStatus;
};

export default useGetLoginStatus;
