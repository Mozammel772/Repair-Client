import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = ({ location }) => {
  return (
    <>
      <Link
        to="/dashboard/home"
        className={`text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200  ${
          location.pathname === "/dashboard/home" ? "text-orange-500 underline" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/dashboard/all-users"
        className={`text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
          location.pathname === "/dashboard/all-users" ? "text-orange-500 underline" : ""
        }`}
      >
        All Users
      </Link>
    </>
  );
};

export default AdminNavbar;
