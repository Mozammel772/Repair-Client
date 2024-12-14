import React from "react";
import { Outlet } from "react-router-dom";
import LiveChat from "../../Pages/LiveChat/LiveChat";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const mainLayout = () => {
  return (
    <div>
      <Navbar/>
      <LiveChat/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default mainLayout;
