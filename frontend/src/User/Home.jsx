import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import useGetStatus from "@/hooks/useGetStatus";
const Home = () => {
  // useGetStatus();
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
