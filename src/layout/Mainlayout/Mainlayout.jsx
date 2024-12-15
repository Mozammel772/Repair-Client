import React from "react";
import { Outlet } from "react-router-dom";
import MessengerChat from "../../Pages/HomePages/MessengerChat/MessengerChat";
import Whatsapps from "../../Pages/HomePages/Whatsapps/Whatsapps";
import LiveChat from "../../Pages/LiveChat/LiveChat";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const mainLayout = () => {
  return (
    <div>
      <Navbar />
      <MessengerChat />
      <Whatsapps />
      <LiveChat />
      <Outlet />
      <Footer />
    </div>
  );
};

export default mainLayout;
