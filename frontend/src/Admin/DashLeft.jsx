import { Home } from "lucide-react";
import React from "react";
import { ListPlus } from "lucide-react";
import { Library } from "lucide-react";
import { Link } from "react-router-dom";
import { CircleUserRound, Settings, LogOut } from "lucide-react";
import axios from "axios";

const DashLeft = () => {
  const logoutHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/logout",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        dispatch(setUser(""));
        dispatch(setisLoggedin(false));
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-slate-900 w-56 h-screen text-white ">
      <div className="pt-5">
        <Link to={"/dash"}>
          {" "}
          <h1 className="text-2xl text-center mt-2 font-semibold ">
            Inventory Pro
          </h1>
        </Link>
      </div>
      <nav className="mt-12 flex flex-col  space-y-4 p-4 font-semibold ">
        <div className="text-xl font-semibold">MENU</div>
        <Link
          to={"/dash"}
          className="flex items-center gap-4 hover:cursor-pointer hover:bg-gray-500 p-2 rounded-xl"
        >
          <Home />
          <p className="text-lg font-normal">Dashboard</p>
        </Link>
        <Link
          to={"/dash/addproduct"}
          className="flex items-center gap-4 hover:cursor-pointer hover:bg-gray-500 p-2 rounded-xl"
        >
          <ListPlus />
          <p className="text-lg font-normal">Add Products</p>
        </Link>
        <Link
          to={"/dash/viewproduct"}
          className="flex items-center gap-4 hover:cursor-pointer hover:bg-gray-500 p-2 rounded-xl"
        >
          <Library />
          <p className="text-lg font-normal">View Products</p>
        </Link>
        {/*  */}
        <div className="text-xl font-semibold">OTHER</div>

        <Link to={"/dash/profile"} className="inline-flex gap-4 p-2">
          {" "}
          <CircleUserRound />
          Profile
        </Link>

        <div className="inline-flex gap-4 p-2">
          <Settings />
          Setting
        </div>
        <div
          className="inline-flex gap-4 p-2 cursor-pointer"
          onClick={logoutHandler}
        >
          <LogOut />
          Logout
        </div>
      </nav>
    </div>
  );
};

export default DashLeft;
