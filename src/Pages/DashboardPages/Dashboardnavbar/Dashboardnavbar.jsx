import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin/useAdmin";
import useAuth from "../../../hooks/useAuth/useAuth";

const Dashboardnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const [isAdmin, isAdminLoading] = useAdmin();

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-blue-600">
              Name
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {isAdmin ? (
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
                  to="/dashboard/all-users"
                  className={`text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
                    location.pathname === "/dashboard/all-users"
                      ? "text-blue-600 underline"
                      : ""
                  }`}
                >
                  All Users
                </Link>
              </>
            ) : (
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
              </>
            )}
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/dashboard/home"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-100 transition-colors duration-200 ${
                location.pathname === "/" ? "bg-blue-100" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-100 transition-colors duration-200 ${
                location.pathname === "/about" ? "bg-blue-100" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-100 transition-colors duration-200 ${
                location.pathname === "/services" ? "bg-blue-100" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/dashboard/all-users"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-100 transition-colors duration-200 ${
                location.pathname === "/dashboard/all-users"
                  ? "bg-blue-100"
                  : ""
              }`}
            >
              All Users
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Dashboardnavbar;



