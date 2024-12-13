import React from "react";
import { Link } from "react-router-dom";

const ModeratorNavbar = ({ location }) => {
  return (
    <>
      <Link
        to="/dashboard/home"
        className={`text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
          location.pathname === "/dashboard/home" ? "text-orange-500 underline" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/dashboard/moderator"
        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-100 transition-colors duration-200 ${
          location.pathname === "/dashboard/moderator" ? "bg-blue-100" : ""
        }`}
      >
        Moderator
      </Link>
      <Link
        to="/dashboard/services"
        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-100 transition-colors duration-200 ${
          location.pathname === "/dashboard/services" ? "bg-blue-100" : ""
        }`}
      >
        Services
      </Link>
    </>
  );
};

export default ModeratorNavbar;
