import React from "react";
import { Outlet } from "react-router-dom";
import Dashboardnavbar from "../../Pages/DashboardPages/Dashboardnavbar/Dashboardnavbar";

const Dashboard = () => {
  return (
    <div>
      <Dashboardnavbar />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};

export default Dashboard;
