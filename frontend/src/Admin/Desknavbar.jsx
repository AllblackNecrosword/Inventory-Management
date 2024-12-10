import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setisLoggedin, setUser } from "@/Redux/authSlice";

const Desknavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="pt-4 ">
      <div className="flex w-11/12 justify-between bg-white mx-auto p-2 rounded-lg px-8 items-center shadow-lg">
        <h2 className="text-black text-2xl font-semibold">Inventory Pro</h2>

        <div className="dropdown dropdown-left  relative">
          {/* Avatar Trigger */}
          <div tabIndex={0} className="avatar w-8 rounded-full cursor-pointer">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User Avatar"
            />
          </div>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute right-0 mt-2"
          >
            <li>
              <Link to={"/dash/profile"}>Profile</Link>
            </li>

            <li>
              <Link onClick={logoutHandler}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Desknavbar;
