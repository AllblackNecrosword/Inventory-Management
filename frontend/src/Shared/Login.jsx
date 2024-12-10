import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setisLoggedin } from "@/Redux/authSlice";
import { setUser } from "@/Redux/authSlice";
import useGetStatus from "@/hooks/useGetStatus";

const Login = () => {
  // useGetStatus();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        input,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        navigate("/dash");
        dispatch(setUser(response.data));
        dispatch(setisLoggedin(true));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="border p-6 text-center rounded-2xl shadow-lg">
          <div>
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <p className="text-gray-600">Login into the system</p>
          </div>
          <div>
            {/* inputs */}
            <div className="my-4">
              <label className="input input-bordered flex items-center gap-2 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                />
              </label>
              {/*  */}
              <label className="input input-bordered flex items-center gap-2 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  name="password"
                  value={input.password}
                  onChange={inputHandler}
                />
              </label>
              <button
                className="btn btn-xs sm:btn-sm md:btn-md w-full lg:btn-lg"
                onClick={submitHandler}
              >
                Login
              </button>
              <p className=" my-2 p-2">
                Don't have an account?{" "}
                <span className="underline text-blue-600">Signup</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
