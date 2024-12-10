// import React, { useEffect } from "react";
// import { setisLoggedin } from "../Redux/authSlice";
// import useGetLoginStatus from "./useGetLoginStatus";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// const useRedirectLoggedOutUser = (path) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const handleSessionExpire = async () => {
//       const isLoggedIn = await useGetLoginStatus();
//       dispatch(setisLoggedin(isLoggedIn));

//       if (!isLoggedIn) {
//         alert("Session Expired, Please login to continue");
//         navigate(path);
//         return;
//       }
//     };
//     handleSessionExpire();
//   }, [navigate, dispatch, path]);
// };

// export default useRedirectLoggedOutUser;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetLoginStatus from "./useGetLoginStatus";

const useRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();
  const getLoginStatus = useGetLoginStatus();

  useEffect(() => {
    const handleSessionExpire = async () => {
      const isLoggedIn = await getLoginStatus();
      if (!isLoggedIn) {
        alert("Session Expired, Please login to continue");
        navigate(path);
      }
    };
    handleSessionExpire();
  }, [navigate, path, getLoginStatus]);
};

export default useRedirectLoggedOutUser;
