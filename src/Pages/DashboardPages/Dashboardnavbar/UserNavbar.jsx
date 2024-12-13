import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = ({ location }) => {
  return (
    <>
      <Link
        to="/dashboard/home"
        className={`text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
          location.pathname === "/dashboard/home"
            ? "text-orange-500 underline"
            : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/dashboard/users-services-post"
        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
          location.pathname === "/dashboard/users-services-post"
            ? "text-orange-500 underline"
            : ""
        }`}
      >
        Service-Post
      </Link>
    </>
  );
};

export default UserNavbar;
