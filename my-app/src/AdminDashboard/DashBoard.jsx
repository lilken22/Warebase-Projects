import React from "react";
// import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar"; 
import Header from "../components/Header";

const DashBoard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Fixed width */}
      <SideBar />

      {/* Main Content Area - Flex column */}
      <div className="flex-1 flex flex-col">
        {/* Header - Fixed height */}
        <Header />

        {/* Scrollable Content Area with padding */}
        {/* <div className="flex-1 p-3 md:p-5 overflow-auto">
          <Outlet /> 
        </div> */}
      </div>
    </div>
  );
};

export default DashBoard;