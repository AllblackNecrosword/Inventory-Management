import React from "react";
import { Outlet } from "react-router-dom";
import { Menu, User, UserRoundPlus } from "lucide-react";
import DashLeft from "./DashLeft";
import useRedirectLoggedOutUser from "@/hooks/useRedirectLoggedOutUser";
const Dashboard = () => {

useRedirectLoggedOutUser("/login");

  return (
    <div className="flex h-screen">
      {/* Left content */}
      <div className="bg-slate-300 h-screen w-10 flex flex-col items-center py-4 space-y-6 rounded-md md:hidden">
        <Menu color="#ffffff" />
        <User color="#ffffff" />
        <UserRoundPlus color="#ffffff" />
      </div>
      <div className="hidden md:block ">
        <DashLeft />
      </div>
      {/* Right content */}
      <div className="w-full overflow-y-auto">
        {/* Outlet for nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
