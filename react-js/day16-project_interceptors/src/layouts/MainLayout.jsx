import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen p-2 flex grid grid-cols-[1fr_7fr]">
      <Navbar />

      <div className="h-full p-2 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
