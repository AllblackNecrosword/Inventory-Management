import React from "react";
import Desknavbar from "./Desknavbar";
import HomeContent from "./Content/HomeContent";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const DashboardContent = () => {
  useGetAllJobs();
  return (
    <div className="w-full bg-slate-100 h-screen">
      <Desknavbar />
      <HomeContent />
    </div>
  );
};

export default DashboardContent;
