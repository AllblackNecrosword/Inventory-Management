
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="p-2 py-3 bg-zinc-900 text-white shadow-xl">
      <nav className="mx-10 flex justify-between md:font-medium items-center">
        <div className="md:text-xl">
          <h1 className="md:text-2xl font-semibold">
            <Link to={"/"}>Trackventory</Link>
          </h1>
        </div>
        <div className="md:text-base">
          <Link to={"/login"}>
            <button className="btn btn-xs sm:btn-sm md:btn-md  lg:btn-lg">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
